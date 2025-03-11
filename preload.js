const { clipboard } = require('electron');
const emojiData = require('./emoji-data');

// 预处理emoji数据，为搜索优化
const processedEmojiData = emojiData.map(emoji => ({
  ...emoji,
  searchTerms: (emoji.name + ' ' + emoji.description + ' ' + emoji.category).toLowerCase()
}));

// 分类缓存
const emojiByCategory = {};
processedEmojiData.forEach(emoji => {
  if (!emojiByCategory[emoji.category]) {
    emojiByCategory[emoji.category] = [];
  }
  emojiByCategory[emoji.category].push(emoji);
});

// 可选的样式
const EMOJI_STYLES = {
  STARS: 1,  // ✨ 表情 ✨ 名称 《分类》 描述
  BRACKETS: 2,  // 【 表情 】 名称 ▪ 分类 ▪ 描述
  DOTS: 3,  // ••• 表情 ••• 名称 ◈ 分类 ◈ 描述
  SIMPLE: 4,  // 表情  名称 [分类] 描述
  BOX: 5  // ■ 表情 ■ 名称 | 分类 | 描述
};

// 当前样式 (可以存储在数据库中以便记住用户选择)
let currentStyle = EMOJI_STYLES.STARS;

// 加载用户保存的样式设置
const loadStyleSettings = () => {
  const styleConfig = utools.db.get('emoji_style_config');
  if (styleConfig) {
    currentStyle = styleConfig.style;
  }
};

// 初始化时加载样式设置
loadStyleSettings();

// 创建emoji列表项 - 根据选择的样式美化显示
function createEmojiListItems(emojis, limit = 1000) {
  return emojis.slice(0, limit).map(emoji => {
    let title = '';
    const category = emoji.category.split('/')[1]; // 只显示子分类
    
    switch(currentStyle) {
      case EMOJI_STYLES.STARS:
        title = `  ✨ ${emoji.emoji} ✨  ${emoji.name} 《${category}》 ${emoji.description}  `;
        break;
      case EMOJI_STYLES.BRACKETS:
        title = `  【 ${emoji.emoji} 】  ${emoji.name} ▪ ${category} ▪ ${emoji.description}  `;
        break;
      case EMOJI_STYLES.DOTS:
        title = `  ••• ${emoji.emoji} •••  ${emoji.name} ◈ ${category} ◈ ${emoji.description}  `;
        break;
      case EMOJI_STYLES.SIMPLE:
        title = `    ${emoji.emoji}   ${emoji.name} [${category}] ${emoji.description}    `;
        break;
      case EMOJI_STYLES.BOX:
        title = `  ■ ${emoji.emoji} ■  ${emoji.name} | ${category} | ${emoji.description}  `;
        break;
      default:
        title = `  ${emoji.emoji}  ${emoji.name} [${category}] ${emoji.description}  `;
    }
    
    return {
      title: title,
      description: '',  // 去掉快捷键显示
      data: emoji
    };
  });
}

// 为webview模式提供的桥接方法
window.exports = {
  // list模式下的方法 - 保留向后兼容性
  "emoji": {
    mode: "list",
    args: {
      // 进入插件时调用
      enter: (action, callbackSetList) => {
        // 打开时立即显示所有emoji
        // 为前10个emoji添加Alt+数字快捷键
        const emojisWithShortcuts = processedEmojiData.map((emoji, index) => {
          if (index < 10) {
            emoji.shortcut = `Alt+${index === 9 ? 0 : index + 1}`;
          } else {
            emoji.shortcut = '';
          }
          return emoji;
        });
        callbackSetList(createEmojiListItems(emojisWithShortcuts));
      },
      
      // 子输入框内容变化时被调用
      search: (action, searchWord, callbackSetList) => {
        if (!searchWord) {
          // 显示所有emoji
          // 为前10个emoji添加Alt+数字快捷键
          const emojisWithShortcuts = processedEmojiData.map((emoji, index) => {
            if (index < 10) {
              emoji.shortcut = `Alt+${index === 9 ? 0 : index + 1}`;
            } else {
              emoji.shortcut = '';
            }
            return emoji;
          });
          callbackSetList(createEmojiListItems(emojisWithShortcuts));
        } else {
          // 处理样式切换命令
          if (searchWord.startsWith('/style')) {
            const styleArg = searchWord.split(' ')[1];
            if (styleArg === 'stars' || styleArg === '1') {
              currentStyle = EMOJI_STYLES.STARS;
            } else if (styleArg === 'brackets' || styleArg === '2') {
              currentStyle = EMOJI_STYLES.BRACKETS;
            } else if (styleArg === 'dots' || styleArg === '3') {
              currentStyle = EMOJI_STYLES.DOTS;
            } else if (styleArg === 'simple' || styleArg === '4') {
              currentStyle = EMOJI_STYLES.SIMPLE;
            } else if (styleArg === 'box' || styleArg === '5') {
              currentStyle = EMOJI_STYLES.BOX;
            }
            
            // 保存样式设置到数据库
            const styleConfig = { _id: 'emoji_style_config', style: currentStyle };
            utools.db.put(styleConfig);
            
            // 返回样式切换成功提示
            return callbackSetList([{
              title: `样式已切换为${Object.keys(EMOJI_STYLES).find(key => EMOJI_STYLES[key] === currentStyle).toLowerCase()}`,
              description: '请输入搜索词继续查找emoji',
              data: null
            }]);
          }
          
          const keyword = searchWord.toLowerCase();
          
          // 使用预处理的搜索词提高性能
          const results = processedEmojiData
            .filter(emoji => emoji.searchTerms.includes(keyword))
            .sort((a, b) => {
              const aNameMatch = a.name.includes(keyword);
              const bNameMatch = b.name.includes(keyword);
              
              if (aNameMatch && !bNameMatch) return -1;
              if (!aNameMatch && bNameMatch) return 1;
              return 0;
            });
          
          // 为前10个结果添加Alt+数字快捷键
          const resultsWithShortcuts = results.map((emoji, index) => {
            if (index < 10) {
              emoji.shortcut = `Alt+${index === 9 ? 0 : index + 1}`;
            } else {
              emoji.shortcut = '';
            }
            return emoji;
          });
            
          callbackSetList(createEmojiListItems(resultsWithShortcuts));
        }
      },
      
      // 用户选择列表中某个条目时被调用
      select: (action, itemData) => {
        const emoji = itemData.data.emoji;
        
        // 直接使用hideMainWindowTypeString输入emoji
        utools.hideMainWindowTypeString(emoji);
        
        // 添加到历史记录
        const history = utools.db.get('emoji_history') || { _id: 'emoji_history', emojis: [] };
        history.emojis = [emoji, ...history.emojis.filter(e => e !== emoji)].slice(0, 20);
        utools.db.put(history);
        
        return true;
      },
      
      // 子输入框为空时的占位符
      placeholder: "搜索emoji表情",
    }
  },
  
  // 历史记录功能
  "emoji_history": {
    mode: "list",
    args: {
      enter: (action, callbackSetList) => {
        const history = utools.db.get('emoji_history') || { _id: 'emoji_history', emojis: [] };
        const results = [];
        
        // 查找历史记录中的emoji详细信息
        for (const emoji of history.emojis) {
          const emojiInfo = processedEmojiData.find(e => e.emoji === emoji);
          if (emojiInfo) {
            results.push(emojiInfo);
          }
        }
        
        // 在显示历史记录前加载最新的样式设置
        loadStyleSettings();
        
        callbackSetList(createEmojiListItems(results));
      },
      placeholder: "最近使用的emoji",
      select: (action, itemData) => {
        const emoji = itemData.data.emoji;
        
        // 直接使用hideMainWindowTypeString输入emoji
        utools.hideMainWindowTypeString(emoji);
        
        return true;
      }
    }
  }
};

// 为webview模式添加API方法
window.preload = {
  // 获取emoji数据
  getEmojiData: () => {
    // 确保数据中包含searchTerms用于搜索
    if (!processedEmojiData[0].searchTerms) {
      // 如果数据没有searchTerms，重新生成
      processedEmojiData.forEach(emoji => {
        emoji.searchTerms = (emoji.name + ' ' + emoji.description + ' ' + emoji.category).toLowerCase();
      });
    }
    // 返回预处理后的emoji数据
    return processedEmojiData;
  },
  
  // 输入emoji到活动窗口
  inputEmoji: (emoji) => {
    // 直接使用hideMainWindowTypeString输入emoji
    utools.hideMainWindowTypeString(emoji);
    
    // 添加到历史记录
    const history = utools.db.get('emoji_history') || { _id: 'emoji_history', emojis: [] };
    history.emojis = [emoji, ...history.emojis.filter(e => e !== emoji)].slice(0, 20);
    utools.db.put(history);
  },
  
  // 保存主题设置
  saveTheme: (themeName) => {
    const themeConfig = { _id: 'emoji_theme_config', theme: themeName };
    utools.db.put(themeConfig);
  },
  
  // 加载主题设置
  loadTheme: () => {
    const themeConfig = utools.db.get('emoji_theme_config');
    return themeConfig ? themeConfig.theme : null;
  }
}; 