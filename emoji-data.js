const emojiData = [
  {
    emoji: "😊",
    name: "呵呵",
    category: "笑脸和情感/笑脸",
    description: "slightly smiling face",
    shortcut: "Alt+1"
  },
  {
    emoji: "😍",
    name: "花痴",
    category: "笑脸和情感/表情脸",
    description: "smiling face with heart-eyes",
    shortcut: "Alt+2"
  },
  {
    emoji: "🤖",
    name: "机器人",
    category: "笑脸和情感/装扮脸",
    description: "robot",
    shortcut: "Alt+3"
  },
  {
    emoji: "😀",
    name: "嘿嘿",
    category: "笑脸和情感/笑脸",
    description: "grinning face",
    shortcut: "Alt+4"
  },
  {
    emoji: "😃",
    name: "哈哈",
    category: "笑脸和情感/笑脸",
    description: "grinning face with big eyes",
    shortcut: "Alt+5"
  },
  {
    emoji: "👌",
    name: "OK",
    category: "人类和身体/几根手指",
    description: "OK hand: light skin tone",
    shortcut: "Alt+6"
  },
  {
    emoji: "😅",
    name: "苦笑",
    category: "笑脸和情感/笑脸",
    description: "grinning face with sweat",
    shortcut: "Alt+7"
  },
  {
    emoji: "👉",
    name: "反手食指向右指",
    category: "人类和身体/一根手指",
    description: "backhand index pointing right: light skin tone",
    shortcut: "Alt+8"
  },
  {
    emoji: "⬆️",
    name: "向上箭头",
    category: "符号/箭头",
    description: "up arrow",
    shortcut: "Alt+9"
  },
  {
    emoji: "🤣",
    name: "笑得满地打滚",
    category: "笑脸和情感/笑脸",
    description: "rolling on the floor laughing",
    shortcut: "Alt+0"
  },
  {
    emoji: "😂",
    name: "笑哭",
    category: "笑脸和情感/笑脸",
    description: "face with tears of joy",
    shortcut: null
  },
  {
    emoji: "❤️",
    name: "红心",
    category: "笑脸和情感/情感",
    description: "red heart",
    shortcut: null
  },
  {
    emoji: "👍",
    name: "赞",
    category: "人类和身体/手势",
    description: "thumbs up",
    shortcut: null
  },
  {
    emoji: "🙏",
    name: "祈祷",
    category: "人类和身体/手势",
    description: "folded hands",
    shortcut: null
  },
  {
    emoji: "🔥",
    name: "火焰",
    category: "旅行和地点/天空与天气",
    description: "fire",
    shortcut: null
  },
  {
    emoji: "😭",
    name: "大哭",
    category: "笑脸和情感/笑脸",
    description: "loudly crying face",
    shortcut: null
  },
  {
    emoji: "😘",
    name: "飞吻",
    category: "笑脸和情感/笑脸",
    description: "face blowing a kiss",
    shortcut: null
  },
  {
    emoji: "🥰",
    name: "面带微笑的脸",
    category: "笑脸和情感/笑脸",
    description: "smiling face with hearts",
    shortcut: null
  },
  {
    emoji: "😉",
    name: "眨眼",
    category: "笑脸和情感/笑脸",
    description: "winking face",
    shortcut: null
  },
  {
    emoji: "🙄",
    name: "白眼",
    category: "笑脸和情感/笑脸",
    description: "face with rolling eyes",
    shortcut: null
  },
  {
    emoji: "😒",
    name: "不爽",
    category: "笑脸和情感/笑脸",
    description: "unamused face",
    shortcut: null
  },
  {
    emoji: "🤔",
    name: "思考",
    category: "笑脸和情感/笑脸",
    description: "thinking face",
    shortcut: null
  },
  {
    emoji: "🤗",
    name: "抱抱",
    category: "笑脸和情感/笑脸",
    description: "hugging face",
    shortcut: null
  },
  {
    emoji: "🤫",
    name: "嘘",
    category: "笑脸和情感/笑脸",
    description: "shushing face",
    shortcut: null
  },
  {
    emoji: "🤐",
    name: "拉链嘴",
    category: "笑脸和情感/笑脸",
    description: "zipper-mouth face",
    shortcut: null
  },
  {
    emoji: "😴",
    name: "睡觉",
    category: "笑脸和情感/笑脸",
    description: "sleeping face",
    shortcut: null
  },
  {
    emoji: "😷",
    name: "口罩脸",
    category: "笑脸和情感/笑脸",
    description: "face with medical mask",
    shortcut: null
  },
  {
    emoji: "🤒",
    name: "发烧",
    category: "笑脸和情感/笑脸",
    description: "face with thermometer",
    shortcut: null
  },
  {
    emoji: "🤢",
    name: "恶心",
    category: "笑脸和情感/笑脸",
    description: "nauseated face",
    shortcut: null
  },
  {
    emoji: "😱",
    name: "尖叫",
    category: "笑脸和情感/笑脸",
    description: "face screaming in fear",
    shortcut: null
  },
  {
    emoji: "👻",
    name: "鬼魂",
    category: "笑脸和情感/表情脸",
    description: "ghost",
    shortcut: null
  },
  {
    emoji: "👋",
    name: "招手",
    category: "人类和身体/手势",
    description: "waving hand",
    shortcut: null
  },
  {
    emoji: "✌️",
    name: "胜利",
    category: "人类和身体/手势",
    description: "victory hand",
    shortcut: null
  },
  {
    emoji: "🤞",
    name: "交叉手指",
    category: "人类和身体/手势",
    description: "crossed fingers",
    shortcut: null
  },
  {
    emoji: "👊",
    name: "拳头",
    category: "人类和身体/手势",
    description: "oncoming fist",
    shortcut: null
  },
  {
    emoji: "💪",
    name: "肌肉",
    category: "人类和身体/身体部位",
    description: "flexed biceps",
    shortcut: null
  },
  {
    emoji: "🧠",
    name: "大脑",
    category: "人类和身体/身体部位",
    description: "brain",
    shortcut: null
  },
  {
    emoji: "👀",
    name: "眼睛",
    category: "人类和身体/身体部位",
    description: "eyes",
    shortcut: null
  },
  {
    emoji: "👨",
    name: "男人",
    category: "人类和身体/人物",
    description: "man",
    shortcut: null
  },
  {
    emoji: "👩",
    name: "女人",
    category: "人类和身体/人物",
    description: "woman",
    shortcut: null
  },
  {
    emoji: "👶",
    name: "婴儿",
    category: "人类和身体/人物",
    description: "baby",
    shortcut: null
  },
  {
    emoji: "👨‍💻",
    name: "程序员",
    category: "人类和身体/人物职业",
    description: "man technologist",
    shortcut: null
  },
  {
    emoji: "👩‍🎓",
    name: "女学生",
    category: "人类和身体/人物职业",
    description: "woman student",
    shortcut: null
  },
  {
    emoji: "👮",
    name: "警察",
    category: "人类和身体/人物职业",
    description: "police officer",
    shortcut: null
  },
  {
    emoji: "🎅",
    name: "圣诞老人",
    category: "人类和身体/人物",
    description: "Santa Claus",
    shortcut: null
  },
  {
    emoji: "🐶",
    name: "狗",
    category: "动物和自然/动物哺乳动物",
    description: "dog face",
    shortcut: null
  },
  {
    emoji: "🐱",
    name: "猫",
    category: "动物和自然/动物哺乳动物",
    description: "cat face",
    shortcut: null
  },
  {
    emoji: "🐼",
    name: "熊猫",
    category: "动物和自然/动物哺乳动物",
    description: "panda",
    shortcut: null
  },
  {
    emoji: "🐷",
    name: "猪",
    category: "动物和自然/动物哺乳动物",
    description: "pig face",
    shortcut: null
  },
  {
    emoji: "🦁",
    name: "狮子",
    category: "动物和自然/动物哺乳动物",
    description: "lion",
    shortcut: null
  },
  {
    emoji: "🐔",
    name: "鸡",
    category: "动物和自然/动物鸟类",
    description: "chicken",
    shortcut: null
  },
  {
    emoji: "🐧",
    name: "企鹅",
    category: "动物和自然/动物鸟类",
    description: "penguin",
    shortcut: null
  },
  {
    emoji: "🦋",
    name: "蝴蝶",
    category: "动物和自然/动物昆虫",
    description: "butterfly",
    shortcut: null
  },
  {
    emoji: "🦄",
    name: "独角兽",
    category: "动物和自然/动物",
    description: "unicorn",
    shortcut: null
  },
  {
    emoji: "🌹",
    name: "玫瑰",
    category: "动物和自然/植物",
    description: "rose",
    shortcut: null
  },
  {
    emoji: "🌸",
    name: "樱花",
    category: "动物和自然/植物",
    description: "cherry blossom",
    shortcut: null
  },
  {
    emoji: "🍎",
    name: "红苹果",
    category: "食物和饮料/食物水果",
    description: "red apple",
    shortcut: null
  },
  {
    emoji: "🍓",
    name: "草莓",
    category: "食物和饮料/食物水果",
    description: "strawberry",
    shortcut: null
  },
  {
    emoji: "🍕",
    name: "披萨",
    category: "食物和饮料/食物准备好的",
    description: "pizza",
    shortcut: null
  },
  {
    emoji: "🍔",
    name: "汉堡",
    category: "食物和饮料/食物准备好的",
    description: "hamburger",
    shortcut: null
  },
  {
    emoji: "🍦",
    name: "冰淇淋",
    category: "食物和饮料/食物甜品",
    description: "soft ice cream",
    shortcut: null
  },
  {
    emoji: "🍺",
    name: "啤酒",
    category: "食物和饮料/饮料",
    description: "beer mug",
    shortcut: null
  },
  {
    emoji: "☕",
    name: "咖啡",
    category: "食物和饮料/饮料",
    description: "hot beverage",
    shortcut: null
  },
  {
    emoji: "🚗",
    name: "汽车",
    category: "旅行和地点/交通陆地",
    description: "automobile",
    shortcut: null
  },
  {
    emoji: "✈️",
    name: "飞机",
    category: "旅行和地点/交通空中",
    description: "airplane",
    shortcut: null
  },
  {
    emoji: "🚀",
    name: "火箭",
    category: "旅行和地点/交通空中",
    description: "rocket",
    shortcut: null
  },
  {
    emoji: "⚽",
    name: "足球",
    category: "活动/体育",
    description: "soccer ball",
    shortcut: null
  },
  {
    emoji: "🏆",
    name: "奖杯",
    category: "活动/奖励",
    description: "trophy",
    shortcut: null
  },
  {
    emoji: "🎮",
    name: "游戏",
    category: "活动/游戏",
    description: "video game",
    shortcut: null
  },
  {
    emoji: "💻",
    name: "笔记本电脑",
    category: "物品/电脑",
    description: "laptop",
    shortcut: null
  },
  {
    emoji: "📱",
    name: "手机",
    category: "物品/电话",
    description: "mobile phone",
    shortcut: null
  },
  {
    emoji: "💰",
    name: "钱袋",
    category: "物品/金钱",
    description: "money bag",
    shortcut: null
  },
  {
    emoji: "💎",
    name: "宝石",
    category: "物品/其他物品",
    description: "gem stone",
    shortcut: null
  },
  {
    emoji: "🔒",
    name: "锁",
    category: "物品/锁",
    description: "locked",
    shortcut: null
  },
  {
    emoji: "🔍",
    name: "放大镜",
    category: "物品/工具",
    description: "magnifying glass tilted left",
    shortcut: null
  },
  {
    emoji: "❓",
    name: "问号",
    category: "符号/标点",
    description: "question mark",
    shortcut: null
  },
  {
    emoji: "⭐",
    name: "星星",
    category: "旅行和地点/天空与天气",
    description: "star",
    shortcut: null
  },
  {
    emoji: "🌈",
    name: "彩虹",
    category: "旅行和地点/天空与天气",
    description: "rainbow",
    shortcut: null
  },
  {
    emoji: "🎉",
    name: "派对",
    category: "活动/庆祝",
    description: "party popper",
    shortcut: null
  },
  {
    emoji: "🎁",
    name: "礼物",
    category: "活动/庆祝",
    description: "wrapped gift",
    shortcut: null
  },
  {
    emoji: "🎵",
    name: "音乐",
    category: "物品/音乐",
    description: "musical note",
    shortcut: null
  },
  {
    emoji: "🏳️‍🌈",
    name: "彩虹旗",
    category: "旗帜/旗帜",
    description: "rainbow flag",
    shortcut: null
  },
  {
    emoji: "😇",
    name: "天使",
    category: "笑脸和情感/笑脸",
    description: "smiling face with halo",
    shortcut: null
  },
  {
    emoji: "🤯",
    name: "头爆炸",
    category: "笑脸和情感/笑脸",
    description: "exploding head",
    shortcut: null
  },
  {
    emoji: "😎",
    name: "墨镜笑脸",
    category: "笑脸和情感/笑脸",
    description: "smiling face with sunglasses",
    shortcut: null
  },
  {
    emoji: "🥳",
    name: "派对脸",
    category: "笑脸和情感/笑脸",
    description: "partying face",
    shortcut: null
  },
  {
    emoji: "🤩",
    name: "星星眼",
    category: "笑脸和情感/笑脸",
    description: "star-struck",
    shortcut: null
  },
  {
    emoji: "🥺",
    name: "求你了",
    category: "笑脸和情感/笑脸",
    description: "pleading face",
    shortcut: null
  },
  {
    emoji: "😋",
    name: "好吃",
    category: "笑脸和情感/笑脸",
    description: "face savoring food",
    shortcut: null
  },
  {
    emoji: "😌",
    name: "松了一口气",
    category: "笑脸和情感/笑脸",
    description: "relieved face",
    shortcut: null
  },
  {
    emoji: "🤭",
    name: "捂嘴笑",
    category: "笑脸和情感/笑脸",
    description: "face with hand over mouth",
    shortcut: null
  },
  {
    emoji: "🧐",
    name: "单片眼镜",
    category: "笑脸和情感/笑脸",
    description: "face with monocle",
    shortcut: null
  },
  {
    emoji: "🤨",
    name: "挑眉",
    category: "笑脸和情感/笑脸",
    description: "face with raised eyebrow",
    shortcut: null
  },
  {
    emoji: "🥴",
    name: "晕头转向",
    category: "笑脸和情感/笑脸",
    description: "woozy face",
    shortcut: null
  },
  {
    emoji: "🤤",
    name: "流口水",
    category: "笑脸和情感/笑脸",
    description: "drooling face",
    shortcut: null
  },
  {
    emoji: "😪",
    name: "困",
    category: "笑脸和情感/笑脸",
    description: "sleepy face",
    shortcut: null
  },
  {
    emoji: "🥵",
    name: "热",
    category: "笑脸和情感/笑脸",
    description: "hot face",
    shortcut: null
  },
  {
    emoji: "🥶",
    name: "冷",
    category: "笑脸和情感/笑脸",
    description: "cold face",
    shortcut: null
  },
  {
    emoji: "🥸",
    name: "伪装",
    category: "笑脸和情感/笑脸",
    description: "disguised face",
    shortcut: null
  },
  {
    emoji: "😵",
    name: "晕",
    category: "笑脸和情感/笑脸",
    description: "dizzy face",
    shortcut: null
  },
  {
    emoji: "🤕",
    name: "受伤的头",
    category: "笑脸和情感/笑脸",
    description: "face with head-bandage",
    shortcut: null
  },
  {
    emoji: "😳",
    name: "脸红",
    category: "笑脸和情感/笑脸",
    description: "flushed face",
    shortcut: null
  },
  {
    emoji: "😰",
    name: "焦虑",
    category: "笑脸和情感/笑脸",
    description: "anxious face with sweat",
    shortcut: null
  },
  {
    emoji: "🤬",
    name: "咒骂",
    category: "笑脸和情感/笑脸",
    description: "face with symbols on mouth",
    shortcut: null
  },
  {
    emoji: "😡",
    name: "愤怒",
    category: "笑脸和情感/笑脸",
    description: "pouting face",
    shortcut: null
  },
  {
    emoji: "👿",
    name: "恶魔",
    category: "笑脸和情感/笑脸",
    description: "angry face with horns",
    shortcut: null
  },
  {
    emoji: "💩",
    name: "便便",
    category: "笑脸和情感/表情脸",
    description: "pile of poo",
    shortcut: null
  },
  {
    emoji: "💀",
    name: "骷髅",
    category: "笑脸和情感/表情脸",
    description: "skull",
    shortcut: null
  },
  {
    emoji: "👽",
    name: "外星人",
    category: "笑脸和情感/表情脸",
    description: "alien",
    shortcut: null
  },
  {
    emoji: "🤡",
    name: "小丑",
    category: "笑脸和情感/表情脸",
    description: "clown face",
    shortcut: null
  },
  {
    emoji: "👾",
    name: "外星怪物",
    category: "笑脸和情感/表情脸",
    description: "alien monster",
    shortcut: null
  },
  {
    emoji: "🤝",
    name: "握手",
    category: "人类和身体/手势",
    description: "handshake",
    shortcut: null
  },
  {
    emoji: "🫶",
    name: "爱心手",
    category: "人类和身体/手势",
    description: "heart hands",
    shortcut: null
  },
  {
    emoji: "🫡",
    name: "敬礼",
    category: "人类和身体/手势",
    description: "saluting face",
    shortcut: null
  },
  {
    emoji: "🫥",
    name: "虚线脸",
    category: "笑脸和情感/笑脸",
    description: "dotted line face",
    shortcut: null
  },
  {
    emoji: "🤌",
    name: "捏手指",
    category: "人类和身体/手势",
    description: "pinched fingers",
    shortcut: null
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    name: "一家人",
    category: "人类和身体/家庭",
    description: "family: man, woman, girl, boy",
    shortcut: null
  },
  {
    emoji: "🧑‍🚀",
    name: "宇航员",
    category: "人类和身体/人物职业",
    description: "astronaut",
    shortcut: null
  },
  {
    emoji: "🧑‍🔬",
    name: "科学家",
    category: "人类和身体/人物职业",
    description: "scientist",
    shortcut: null
  },
  {
    emoji: "🧑‍🍳",
    name: "厨师",
    category: "人类和身体/人物职业",
    description: "cook",
    shortcut: null
  },
  {
    emoji: "🦊",
    name: "狐狸",
    category: "动物和自然/动物哺乳动物",
    description: "fox",
    shortcut: null
  },
  {
    emoji: "🦝",
    name: "浣熊",
    category: "动物和自然/动物哺乳动物",
    description: "raccoon",
    shortcut: null
  },
  {
    emoji: "🐢",
    name: "乌龟",
    category: "动物和自然/动物爬行动物",
    description: "turtle",
    shortcut: null
  },
  {
    emoji: "🦖",
    name: "霸王龙",
    category: "动物和自然/动物爬行动物",
    description: "T-Rex",
    shortcut: null
  },
  {
    emoji: "🐙",
    name: "章鱼",
    category: "动物和自然/动物海洋",
    description: "octopus",
    shortcut: null
  },
  {
    emoji: "🦈",
    name: "鲨鱼",
    category: "动物和自然/动物海洋",
    description: "shark",
    shortcut: null
  },
  {
    emoji: "🦚",
    name: "孔雀",
    category: "动物和自然/动物鸟类",
    description: "peacock",
    shortcut: null
  },
  {
    emoji: "🦩",
    name: "火烈鸟",
    category: "动物和自然/动物鸟类",
    description: "flamingo",
    shortcut: null
  },
  {
    emoji: "🐉",
    name: "龙",
    category: "动物和自然/动物爬行动物",
    description: "dragon",
    shortcut: null
  },
  {
    emoji: "🌵",
    name: "仙人掌",
    category: "动物和自然/植物",
    description: "cactus",
    shortcut: null
  },
  {
    emoji: "🍄",
    name: "蘑菇",
    category: "动物和自然/植物",
    description: "mushroom",
    shortcut: null
  },
  {
    emoji: "🍉",
    name: "西瓜",
    category: "食物和饮料/食物水果",
    description: "watermelon",
    shortcut: null
  },
  {
    emoji: "🥥",
    name: "椰子",
    category: "食物和饮料/食物水果",
    description: "coconut",
    shortcut: null
  },
  {
    emoji: "🍍",
    name: "菠萝",
    category: "食物和饮料/食物水果",
    description: "pineapple",
    shortcut: null
  },
  {
    emoji: "🥑",
    name: "牛油果",
    category: "食物和饮料/食物蔬菜",
    description: "avocado",
    shortcut: null
  },
  {
    emoji: "🍜",
    name: "拉面",
    category: "食物和饮料/食物亚洲",
    description: "steaming bowl",
    shortcut: null
  },
  {
    emoji: "🍣",
    name: "寿司",
    category: "食物和饮料/食物亚洲",
    description: "sushi",
    shortcut: null
  },
  {
    emoji: "🍩",
    name: "甜甜圈",
    category: "食物和饮料/食物甜品",
    description: "doughnut",
    shortcut: null
  },
  {
    emoji: "🥂",
    name: "干杯",
    category: "食物和饮料/饮料",
    description: "clinking glasses",
    shortcut: null
  },
  {
    emoji: "🏝️",
    name: "荒岛",
    category: "旅行和地点/地点",
    description: "desert island",
    shortcut: null
  },
  {
    emoji: "🏔️",
    name: "雪山",
    category: "旅行和地点/地点",
    description: "snow-capped mountain",
    shortcut: null
  },
  {
    emoji: "🏙️",
    name: "城市天际线",
    category: "旅行和地点/地点",
    description: "cityscape",
    shortcut: null
  },
  {
    emoji: "🚲",
    name: "自行车",
    category: "旅行和地点/交通陆地",
    description: "bicycle",
    shortcut: null
  },
  {
    emoji: "🛵",
    name: "摩托车",
    category: "旅行和地点/交通陆地",
    description: "motor scooter",
    shortcut: null
  },
  {
    emoji: "🚁",
    name: "直升机",
    category: "旅行和地点/交通空中",
    description: "helicopter",
    shortcut: null
  },
  {
    emoji: "⛵",
    name: "帆船",
    category: "旅行和地点/交通水上",
    description: "sailboat",
    shortcut: null
  },
  {
    emoji: "🌞",
    name: "太阳",
    category: "旅行和地点/天空与天气",
    description: "sun with face",
    shortcut: null
  },
  {
    emoji: "🌛",
    name: "弯月",
    category: "旅行和地点/天空与天气",
    description: "first quarter moon face",
    shortcut: null
  },
  {
    emoji: "⛄",
    name: "雪人",
    category: "旅行和地点/天空与天气",
    description: "snowman without snow",
    shortcut: null
  },
  {
    emoji: "⚡",
    name: "闪电",
    category: "旅行和地点/天空与天气",
    description: "high voltage",
    shortcut: null
  },
  {
    emoji: "🏀",
    name: "篮球",
    category: "活动/体育",
    description: "basketball",
    shortcut: null
  },
  {
    emoji: "🏓",
    name: "乒乓球",
    category: "活动/体育",
    description: "ping pong",
    shortcut: null
  },
  {
    emoji: "🎯",
    name: "正中靶心",
    category: "活动/游戏",
    description: "bullseye",
    shortcut: null
  },
  {
    emoji: "🎨",
    name: "艺术",
    category: "活动/艺术与工艺",
    description: "artist palette",
    shortcut: null
  },
  {
    emoji: "🎭",
    name: "表演艺术",
    category: "活动/艺术与工艺",
    description: "performing arts",
    shortcut: null
  },
  {
    emoji: "🎬",
    name: "场记板",
    category: "活动/艺术与工艺",
    description: "clapper board",
    shortcut: null
  },
  {
    emoji: "🎤",
    name: "麦克风",
    category: "物品/音乐",
    description: "microphone",
    shortcut: null
  },
  {
    emoji: "🎧",
    name: "耳机",
    category: "物品/音乐",
    description: "headphone",
    shortcut: null
  },
  {
    emoji: "📚",
    name: "书籍",
    category: "物品/书与纸张",
    description: "books",
    shortcut: null
  },
  {
    emoji: "💡",
    name: "灯泡",
    category: "物品/家具",
    description: "light bulb",
    shortcut: null
  },
  {
    emoji: "🔋",
    name: "电池",
    category: "物品/电子",
    description: "battery",
    shortcut: null
  },
  {
    emoji: "🧸",
    name: "泰迪熊",
    category: "物品/玩具",
    description: "teddy bear",
    shortcut: null
  },
  {
    emoji: "🎁",
    name: "礼物",
    category: "物品/邮件",
    description: "wrapped gift",
    shortcut: null
  },
  {
    emoji: "⏰",
    name: "闹钟",
    category: "物品/时间",
    description: "alarm clock",
    shortcut: null
  },
  {
    emoji: "💯",
    name: "满分",
    category: "符号/数学",
    description: "hundred points",
    shortcut: null
  },
  {
    emoji: "🔔",
    name: "铃铛",
    category: "物品/声音",
    description: "bell",
    shortcut: null
  },
  {
    emoji: "🎪",
    name: "马戏团",
    category: "旅行和地点/地点",
    description: "circus tent",
    shortcut: null
  },
  {
    emoji: "💬",
    name: "对话框",
    category: "符号/其他符号",
    description: "speech balloon",
    shortcut: null
  },
  {
    emoji: "🚫",
    name: "禁止",
    category: "符号/警告",
    description: "prohibited",
    shortcut: null
  },
  {
    emoji: "✅",
    name: "复选标记",
    category: "符号/其他符号",
    description: "check mark button",
    shortcut: null
  },
  {
    emoji: "♻️",
    name: "回收",
    category: "符号/其他符号",
    description: "recycling symbol",
    shortcut: null
  },
  {
    emoji: "🏳️",
    name: "白旗",
    category: "旗帜/旗帜",
    description: "white flag",
    shortcut: null
  },
  {
    emoji: "🇨🇳",
    name: "中国",
    category: "旗帜/国家旗帜",
    description: "flag: China",
    shortcut: null
  },
  {
    emoji: "🇺🇸",
    name: "美国",
    category: "旗帜/国家旗帜",
    description: "flag: United States",
    shortcut: null
  },
  {
    emoji: "🇯🇵",
    name: "日本",
    category: "旗帜/国家旗帜",
    description: "flag: Japan",
    shortcut: null
  },
  {
    emoji: "🇰🇷",
    name: "韩国",
    category: "旗帜/国家旗帜",
    description: "flag: South Korea",
    shortcut: null
  },
  {
    emoji: "🇬🇧",
    name: "英国",
    category: "旗帜/国家旗帜",
    description: "flag: United Kingdom",
    shortcut: null
  },
  {
    emoji: "🇩🇪",
    name: "德国",
    category: "旗帜/国家旗帜",
    description: "flag: Germany",
    shortcut: null
  },
  {
    emoji: "🇫🇷",
    name: "法国",
    category: "旗帜/国家旗帜",
    description: "flag: France",
    shortcut: null
  },
  {
    emoji: "🇮🇹",
    name: "意大利",
    category: "旗帜/国家旗帜",
    description: "flag: Italy",
    shortcut: null
  },
  {
    emoji: "🇪🇸",
    name: "西班牙",
    category: "旗帜/国家旗帜",
    description: "flag: Spain",
    shortcut: null
  },
  {
    emoji: "🇷🇺",
    name: "俄罗斯",
    category: "旗帜/国家旗帜",
    description: "flag: Russia",
    shortcut: null
  },
  {
    emoji: "🇧🇷",
    name: "巴西",
    category: "旗帜/国家旗帜",
    description: "flag: Brazil",
    shortcut: null
  },
  {
    emoji: "🇦🇺",
    name: "澳大利亚",
    category: "旗帜/国家旗帜",
    description: "flag: Australia",
    shortcut: null
  },
  {
    emoji: "🇨🇦",
    name: "加拿大",
    category: "旗帜/国家旗帜",
    description: "flag: Canada",
    shortcut: null
  },
  {
    emoji: "🇮🇳",
    name: "印度",
    category: "旗帜/国家旗帜",
    description: "flag: India",
    shortcut: null
  },
  {
    emoji: "🥹",
    name: "感动",
    category: "笑脸和情感/笑脸",
    description: "face holding back tears",
    shortcut: null
  },
  {
    emoji: "🫠",
    name: "融化脸",
    category: "笑脸和情感/笑脸",
    description: "melting face",
    shortcut: null
  },
  {
    emoji: "🫢",
    name: "偷看",
    category: "笑脸和情感/笑脸",
    description: "face with open eyes and hand over mouth",
    shortcut: null
  },
  {
    emoji: "🫣",
    name: "眯眼偷看",
    category: "笑脸和情感/笑脸",
    description: "face with peeking eye",
    shortcut: null
  },
  {
    emoji: "🫤",
    name: "斜嘴",
    category: "笑脸和情感/笑脸",
    description: "face with diagonal mouth",
    shortcut: null
  },
  {
    emoji: "🥹",
    name: "含泪微笑",
    category: "笑脸和情感/笑脸",
    description: "face holding back tears",
    shortcut: null
  },
  {
    emoji: "🧌",
    name: "巨魔",
    category: "笑脸和情感/表情脸",
    description: "troll",
    shortcut: null
  },
  {
    emoji: "🪸",
    name: "珊瑚",
    category: "动物和自然/动物海洋",
    description: "coral",
    shortcut: null
  },
  {
    emoji: "🪷",
    name: "莲花",
    category: "动物和自然/植物",
    description: "lotus",
    shortcut: null
  },
  {
    emoji: "🪹",
    name: "空巢",
    category: "动物和自然/动物鸟类",
    description: "empty nest",
    shortcut: null
  },
  {
    emoji: "🪺",
    name: "有蛋的巢",
    category: "动物和自然/动物鸟类",
    description: "nest with eggs",
    shortcut: null
  },
  {
    emoji: "🫘",
    name: "豆子",
    category: "食物和饮料/食物蔬菜",
    description: "beans",
    shortcut: null
  },
  {
    emoji: "🫗",
    name: "倒液体",
    category: "食物和饮料/饮料",
    description: "pouring liquid",
    shortcut: null
  },
  {
    emoji: "🧋",
    name: "珍珠奶茶",
    category: "食物和饮料/饮料",
    description: "bubble tea",
    shortcut: null
  },
  {
    emoji: "🧊",
    name: "冰块",
    category: "食物和饮料/饮料",
    description: "ice cube",
    shortcut: null
  },
  {
    emoji: "🪬",
    name: "哈姆莎",
    category: "物品/宗教",
    description: "hamsa",
    shortcut: null
  },
  {
    emoji: "🪩",
    name: "镜面球",
    category: "活动/庆祝",
    description: "mirror ball",
    shortcut: null
  },
  {
    emoji: "🪫",
    name: "电量低",
    category: "物品/电子",
    description: "low battery",
    shortcut: null
  },
  {
    emoji: "🩻",
    name: "X射线",
    category: "物品/医疗",
    description: "x-ray",
    shortcut: null
  },
  {
    emoji: "🫧",
    name: "气泡",
    category: "旅行和地点/天空与天气",
    description: "bubbles",
    shortcut: null
  },
  {
    emoji: "🪪",
    name: "身份证",
    category: "物品/办公",
    description: "identification card",
    shortcut: null
  },
  {
    emoji: "🧩",
    name: "拼图",
    category: "活动/游戏",
    description: "puzzle piece",
    shortcut: null
  },
  {
    emoji: "🪵",
    name: "木头",
    category: "动物和自然/植物",
    description: "wood",
    shortcut: null
  },
  {
    emoji: "🪨",
    name: "石头",
    category: "旅行和地点/地点",
    description: "rock",
    shortcut: null
  },
  {
    emoji: "🪦",
    name: "墓碑",
    category: "物品/其他物品",
    description: "headstone",
    shortcut: null
  },
  {
    emoji: "🧿",
    name: "纳扎尔护身符",
    category: "物品/宗教",
    description: "nazar amulet",
    shortcut: null
  },
  {
    emoji: "🧸",
    name: "泰迪熊",
    category: "物品/玩具",
    description: "teddy bear",
    shortcut: null
  },
  {
    emoji: "🪭",
    name: "摇头符号",
    category: "符号/其他符号",
    description: "shaking face",
    shortcut: null
  },
  {
    emoji: "🩵",
    name: "浅蓝心",
    category: "笑脸和情感/情感",
    description: "light blue heart",
    shortcut: null
  },
  {
    emoji: "🩶",
    name: "灰心",
    category: "笑脸和情感/情感",
    description: "grey heart",
    shortcut: null
  },
  {
    emoji: "❤️‍🔥",
    name: "燃烧的心",
    category: "笑脸和情感/情感",
    description: "heart on fire",
    shortcut: null
  },
  {
    emoji: "❤️‍🩹",
    name: "愈合的心",
    category: "笑脸和情感/情感",
    description: "mending heart",
    shortcut: null
  },
  {
    emoji: "🩷",
    name: "粉色心",
    category: "笑脸和情感/情感",
    description: "pink heart",
    shortcut: null
  },
  {
    emoji: "🫰",
    name: "手指交叉",
    category: "人类和身体/手势",
    description: "hand with index finger and thumb crossed",
    shortcut: null
  },
  {
    emoji: "🫱",
    name: "右手掌",
    category: "人类和身体/手势",
    description: "rightwards hand",
    shortcut: null
  },
  {
    emoji: "🫲",
    name: "左手掌",
    category: "人类和身体/手势",
    description: "leftwards hand",
    shortcut: null
  },
  {
    emoji: "🫳",
    name: "手掌向下",
    category: "人类和身体/手势",
    description: "palm down hand",
    shortcut: null
  },
  {
    emoji: "🫴",
    name: "手掌向上",
    category: "人类和身体/手势",
    description: "palm up hand",
    shortcut: null
  },
  {
    emoji: "🫵",
    name: "指向观众",
    category: "人类和身体/手势",
    description: "index pointing at the viewer",
    shortcut: null
  },
  {
    emoji: "🫦",
    name: "咬嘴唇",
    category: "人类和身体/身体部位",
    description: "biting lip",
    shortcut: null
  },
  {
    emoji: "🧠",
    name: "大脑",
    category: "人类和身体/身体部位",
    description: "brain",
    shortcut: null
  }
];

// 导出数据以供其他文件使用
module.exports = emojiData; 