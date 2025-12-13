// 書籍資料庫
const bookDatabase = {
    happy: [
        {
            title: "小王子",
            author: "安東尼·聖修伯里",
            description: "一個充滿童趣和哲理的故事，讓你重新發現生活中簡單的快樂。透過小王子的眼睛，看見世界最純真的美好。",
            emoji: "👑",
            tags: ["經典", "童話", "哲學"],
            isbn: "9780156012195"
        },
        {
            title: "解憂雜貨店",
            author: "東野圭吾",
            description: "溫暖療癒的奇幻故事，讓你相信每個煩惱都能找到答案。時光交錯中，感受人與人之間的溫暖連結。",
            emoji: "📮",
            tags: ["療癒", "奇幻", "溫馨"],
            isbn: "9789571361994",
            coverUrl: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/076/93/0010769399.jpg&v=59aa95e1k&w=348&h=348"
        },
        {
            title: "享受吧！一個人的旅行",
            author: "伊莉莎白·吉兒伯特",
            description: "一段尋找自我的美食、祈禱與戀愛之旅。跟著作者環遊世界，重新找回生命的熱情與喜悅。",
            emoji: "✈️",
            tags: ["旅行", "自我探索", "勇氣"],
            isbn: "9780143038412"
        }
    ],
    sad: [
        {
            title: "被討厭的勇氣",
            author: "岸見一郎、古賀史健",
            description: "透過阿德勒心理學，學習如何接納自己、放下過去。你不需要被所有人喜歡，也能活得自在快樂。",
            emoji: "💪",
            tags: ["心理學", "成長", "勇氣"],
            isbn: "9784478025819"
        },
        {
            title: "深夜食堂",
            author: "安倍夜郎",
            description: "一碗溫暖的料理，一段動人的故事。在深夜的食堂裡，每個人都能找到撫慰心靈的溫暖。",
            emoji: "🍜",
            tags: ["療癒", "美食", "人情味"],
            isbn: "9784091883780"
        },
        {
            title: "牧羊少年奇幻之旅",
            author: "保羅·科爾賀",
            description: "一個關於追尋夢想的寓言故事。提醒你，當你真心渴望某樣東西時，整個宇宙都會聯合起來幫助你。",
            emoji: "🐑",
            tags: ["勵志", "夢想", "冒險"],
            isbn: "9780062315007"
        }
    ],
    excited: [
        {
            title: "冰與火之歌",
            author: "喬治·R·R·馬丁",
            description: "史詩般的奇幻冒險，充滿驚險刺激的情節。在權力遊戲中，體驗最激動人心的冒險旅程。",
            emoji: "🐉",
            tags: ["奇幻", "冒險", "史詩"],
            isbn: "9780553103540"
        },
        {
            title: "三體",
            author: "劉慈欣",
            description: "驚心動魄的科幻巨作，帶你探索宇宙的奧秘。面對未知的外星文明，人類將何去何從？",
            emoji: "🌌",
            tags: ["科幻", "太空", "懸疑"],
            isbn: "9787536692930"
        },
        {
            title: "達文西密碼",
            author: "丹·布朗",
            description: "緊張刺激的解謎冒險，充滿意想不到的轉折。跟隨主角一起揭開隱藏千年的秘密。",
            emoji: "🔍",
            tags: ["懸疑", "解謎", "冒險"],
            isbn: "9789571337944",
            coverUrl: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/033/79/0010337944.jpg&v=446a1ca3k&w=348&h=348"
        }
    ],
    calm: [
        {
            title: "湖濱散記",
            author: "亨利·梭羅",
            description: "一個人在森林湖畔的生活哲思。在大自然的懷抱中，找到內心最深層的平靜與智慧。",
            emoji: "🌲",
            tags: ["自然", "哲學", "寧靜"],
            isbn: "9780691096124"
        },
        {
            title: "正念的奇蹟",
            author: "一行禪師",
            description: "學習活在當下的藝術，用正念覺察生活的每一刻。在呼吸之間，發現生命的美好。",
            emoji: "🧘",
            tags: ["正念", "禪修", "心靈"],
            isbn: "9780807012390"
        },
        {
            title: "如何閱讀一本書",
            author: "莫提默·艾德勒",
            description: "靜下心來，學習深度閱讀的技巧。在書本的世界裡，找到與自己對話的寧靜時光。",
            emoji: "📖",
            tags: ["閱讀", "學習", "思考"],
            isbn: "9780671212094"
        }
    ],
    anxious: [
        {
            title: "好好呼吸",
            author: "許瑞云",
            description: "透過呼吸練習，釋放壓力與焦慮。簡單的呼吸技巧，幫助你找回內心的平靜與安定。",
            emoji: "🌬️",
            tags: ["呼吸", "放鬆", "療癒"],
            isbn: "9789863426653"
        },
        {
            title: "焦慮是禮物",
            author: "艾蜜·柯帝",
            description: "重新認識焦慮，將它轉化為成長的動力。了解焦慮的訊息，學會與它和平共處。",
            emoji: "🎁",
            tags: ["焦慮", "心理", "成長"],
            isbn: "9789863618867"
        },
        {
            title: "也許你該找個人聊聊",
            author: "蘿蕊·葛利布",
            description: "一位心理治療師的真實故事。在他人的故事中，找到療癒自己的力量和勇氣。",
            emoji: "💭",
            tags: ["心理治療", "人生", "療癒"],
            isbn: "9781328662057"
        }
    ],
    curious: [
        {
            title: "人類大歷史",
            author: "哈拉瑞",
            description: "從智人的演化到現代文明的發展，一本書帶你了解人類的過去、現在與未來。",
            emoji: "🌍",
            tags: ["歷史", "人類學", "科學"],
            isbn: "9780062316097"
        },
        {
            title: "為什麼我們這樣生活，那樣工作？",
            author: "查爾斯·杜希格",
            description: "探索習慣的科學，了解大腦如何運作。發現改變習慣的關鍵，重新掌控你的人生。",
            emoji: "🧠",
            tags: ["習慣", "心理學", "科學"],
            isbn: "9780812981605"
        },
        {
            title: "蘇菲的世界",
            author: "喬斯坦·賈德",
            description: "一本哲學啟蒙小說，帶你踏上探索智慧的旅程。用有趣的故事，認識西方哲學的精髓。",
            emoji: "🤔",
            tags: ["哲學", "思考", "啟蒙"],
            isbn: "9780374530716"
        }
    ],
    tired: [
        {
            title: "睡前5分鐘的超好玩親子互動英文",
            author: "吉田研作",
            description: "輕鬆有趣的睡前讀物，讓疲憊的心靈得到舒緩。簡單的內容，帶來溫馨的親子時光。",
            emoji: "🛏️",
            tags: ["睡前", "輕鬆", "溫馨"],
            isbn: "9784774172958"
        },
        {
            title: "當呼吸化為空氣",
            author: "保羅·卡拉尼提",
            description: "一位天才醫師的生命告白，讓你重新思考生命的意義。在有限的時光裡，活出最真實的自己。",
            emoji: "☁️",
            tags: ["生命", "回憶錄", "感動"],
            isbn: "9780812988406"
        },
        {
            title: "小確幸",
            author: "村上春樹",
            description: "村上春樹的散文集，充滿生活中的小確幸。在平凡的日常裡，發現微小而確實的幸福。",
            emoji: "☕",
            tags: ["散文", "生活", "溫暖"],
            isbn: "9784167502041"
        }
    ],
    inspired: [
        {
            title: "創意，從無到有",
            author: "楊傑美",
            description: "激發你的創意潛能，學習如何將靈感轉化為實際作品。每個人都能成為創意大師。",
            emoji: "💡",
            tags: ["創意", "靈感", "實用"],
            isbn: "9789863982036"
        },
        {
            title: "藝術家之路",
            author: "茱莉亞·卡麥隆",
            description: "釋放內在的創造力，找回藝術家的靈魂。透過晨間筆記和藝術家之約，重新點燃創作熱情。",
            emoji: "🎨",
            tags: ["創作", "藝術", "自我探索"],
            isbn: "9781585429462"
        },
        {
            title: "心流",
            author: "米哈里·契克森米哈伊",
            description: "探索最佳體驗的心理學。學習如何進入心流狀態，讓工作和生活都充滿創造力。",
            emoji: "🌊",
            tags: ["心理學", "創造力", "專注"],
            isbn: "9780061339202"
        }
    ],
    angry: [
        {
            title: "憤怒的勇氣",
            author: "戴爾·卡內基",
            description: "學習如何將憤怒轉化為正向力量。理解情緒背後的訊息，用建設性的方式表達你的感受。",
            emoji: "🔥",
            tags: ["情緒管理", "溝通", "成長"],
            isbn: "9780671733353"
        },
        {
            title: "非暴力溝通",
            author: "馬歇爾·盧森堡",
            description: "透過非暴力溝通，化解衝突與憤怒。學習用同理心表達需求，建立真誠的人際關係。",
            emoji: "💬",
            tags: ["溝通", "同理心", "關係"],
            isbn: "9781892005281"
        },
        {
            title: "情緒勒索",
            author: "蘇珊·福沃德",
            description: "認識情緒勒索的模式，學習設立界線。不再被憤怒綁架，重新掌握你的人生主導權。",
            emoji: "⚡",
            tags: ["心理學", "界線", "自我保護"],
            isbn: "9780060928971"
        }
    ],
    lonely: [
        {
            title: "獨處的藝術",
            author: "安東尼·史脫爾",
            description: "重新定義孤獨的意義。在獨處中發現自我，學習享受一個人的時光，培養內在的豐盛。",
            emoji: "🌙",
            tags: ["獨處", "自我認識", "成長"],
            isbn: "9780743280471"
        },
        {
            title: "孤獨，是一種能力",
            author: "周國平",
            description: "哲學家的孤獨思索。在喧囂世界中，找到與自己相處的智慧，讓孤獨成為力量。",
            emoji: "🌌",
            tags: ["哲學", "獨處", "智慧"],
            isbn: "9787540768706"
        },
        {
            title: "房思琪的初戀樂園",
            author: "林奕含",
            description: "一個關於孤獨與傷痛的故事。透過文學的力量，理解孤獨的深層意義，找到療癒的可能。",
            emoji: "🌸",
            tags: ["文學", "療癒", "深度"],
            isbn: "9789869453721"
        }
    ],
    romantic: [
        {
            title: "傲慢與偏見",
            author: "珍·奧斯汀",
            description: "經典浪漫文學巨作。在愛情與自尊之間，體會最動人的愛情故事，相信真愛的力量。",
            emoji: "💕",
            tags: ["愛情", "經典", "浪漫"],
            isbn: "9780141439518"
        },
        {
            title: "挪威的森林",
            author: "村上春樹",
            description: "青春與愛情的憂鬱詩篇。在失落與尋找中，感受最純粹的浪漫情懷與生命的美好。",
            emoji: "🌲",
            tags: ["愛情", "青春", "文學"],
            isbn: "9789571313641",
            coverUrl: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/004/32/0010043234.jpg&v=446a1c57k&w=348&h=348"
        },
        {
            title: "巴黎聖母院",
            author: "維克多·雨果",
            description: "震撼人心的愛情史詩。見證超越外表的真愛，感受最深刻動人的浪漫情懷。",
            emoji: "⛪",
            tags: ["經典", "愛情", "史詩"],
            isbn: "9780140443530"
        }
    ],
    motivated: [
        {
            title: "原子習慣",
            author: "詹姆斯·克利爾",
            description: "建立微小習慣，創造巨大改變。每天進步1%，一年後你將進步37倍，實現你的目標。",
            emoji: "⚡",
            tags: ["習慣", "成長", "目標"],
            isbn: "9780735211292"
        },
        {
            title: "做自己的生命設計師",
            author: "比爾·柏內特、戴夫·埃文斯",
            description: "用設計思考打造理想人生。設定目標、採取行動，成為自己想要成為的人。",
            emoji: "🎯",
            tags: ["生涯規劃", "行動", "成功"],
            isbn: "9781101875322"
        },
        {
            title: "刻意練習",
            author: "安德斯·艾瑞克森",
            description: "揭開天才背後的秘密。透過正確的練習方法，每個人都能達到卓越的成就。",
            emoji: "🏆",
            tags: ["學習", "練習", "卓越"],
            isbn: "9780544456235"
        }
    ],
    nostalgic: [
        {
            title: "城南舊事",
            author: "林海音",
            description: "童年往事的溫柔回憶。在老北京的街巷中，尋找那些逝去的美好時光與純真歲月。",
            emoji: "🏮",
            tags: ["童年", "回憶", "經典"],
            isbn: "9787530212608"
        },
        {
            title: "追憶似水年華",
            author: "馬塞爾·普魯斯特",
            description: "時光與記憶的文學巨作。在回憶的長河中，重溫生命中每個珍貴的瞬間。",
            emoji: "⏰",
            tags: ["回憶", "文學", "經典"],
            isbn: "9780142437964"
        },
        {
            title: "我們都是時間旅人",
            author: "詹姆斯·葛雷易克",
            description: "探索時間的奧秘。在科學與哲學中，理解時間如何塑造我們的記憶與人生。",
            emoji: "🌠",
            tags: ["時間", "科學", "哲學"],
            isbn: "9780307908797"
        }
    ],
    confused: [
        {
            title: "少，但是更好",
            author: "葛瑞格·麥基昂",
            description: "在混亂中找到方向。學習精準主義，聚焦真正重要的事，讓人生變得清晰明確。",
            emoji: "🎯",
            tags: ["選擇", "專注", "簡化"],
            isbn: "9780804137409"
        },
        {
            title: "活出意義來",
            author: "維克多·弗蘭克",
            description: "在困境中尋找生命意義。即使在最迷惘的時刻，也能找到前進的方向與力量。",
            emoji: "🌟",
            tags: ["意義", "哲學", "勵志"],
            isbn: "9780807014295"
        },
        {
            title: "你的誤解，才是真相",
            author: "蘇珊·奧爾波特",
            description: "釐清思維迷霧，看清事實真相。用理性思考突破困惑，做出明智的決定。",
            emoji: "🔍",
            tags: ["思考", "理性", "決策"],
            isbn: "9789863982043"
        }
    ],
    adventurous: [
        {
            title: "荒野求生",
            author: "強·克拉庫爾",
            description: "真實的荒野冒險故事。跟隨探險者的腳步，體驗極限挑戰與大自然的震撼。",
            emoji: "⛰️",
            tags: ["冒險", "探險", "真實故事"],
            isbn: "9780385486804"
        },
        {
            title: "環遊世界八十天",
            author: "儒勒·凡爾納",
            description: "經典冒險文學。一場跨越全球的驚險旅程，充滿意想不到的挑戰與驚喜。",
            emoji: "🌍",
            tags: ["冒險", "旅行", "經典"],
            isbn: "9780140449068"
        },
        {
            title: "白鯨記",
            author: "赫爾曼·梅爾維爾",
            description: "史詩級的海上冒險。與船長一同追逐傳說中的白鯨，展開終極的冒險之旅。",
            emoji: "🐋",
            tags: ["冒險", "海洋", "史詩"],
            isbn: "9780142437247"
        }
    ],
    grateful: [
        {
            title: "感恩的力量",
            author: "羅伯特·埃蒙斯",
            description: "科學證實的幸福秘訣。培養感恩的心，提升生活滿意度，活出更豐盛的人生。",
            emoji: "✨",
            tags: ["感恩", "幸福", "正向"],
            isbn: "9780547085739"
        },
        {
            title: "禮物",
            author: "史賓賽·強森",
            description: "珍惜當下的智慧。學習感恩現在擁有的一切，在每個瞬間找到生命的禮物。",
            emoji: "🎁",
            tags: ["感恩", "當下", "智慧"],
            isbn: "9780385517577"
        },
        {
            title: "謝謝你遲到了",
            author: "湯馬斯·佛里曼",
            description: "在快速變化的世界中，感恩每個停下來的時刻。重新思考科技、全球化與人性。",
            emoji: "⏸️",
            tags: ["感恩", "反思", "當代"],
            isbn: "9780374273538"
        }
    ]
};

// DOM 元素
const moodSelector = document.getElementById('moodSelector');
const resultContainer = document.getElementById('resultContainer');
const moodButtons = document.querySelectorAll('.mood-btn');
const retryBtn = document.getElementById('retryBtn');

// 為每個心情按鈕添加點擊事件
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.dataset.mood;
        showBookRecommendation(mood);
    });
});

// 重新選擇按鈕
retryBtn.addEventListener('click', () => {
    resultContainer.classList.remove('show');
    moodSelector.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 檢查圖片是否為有效封面（不是佔位圖）
function isValidCoverImage(img) {
    // 檢查圖片尺寸 - 太小的圖片通常是佔位圖
    if (img.naturalWidth < 50 || img.naturalHeight < 50) {
        console.log('圖片太小，可能是佔位圖');
        return false;
    }

    // 檢查是否為 Google Books 的預設佔位圖
    if (img.src.includes('books/content?id=') && img.naturalWidth === 128) {
        console.log('偵測到 Google Books 佔位圖');
        return false;
    }

    return true;
}

// 檢查書名是否匹配（相似度檢查）
function isTitleMatch(searchTitle, foundTitle) {
    if (!foundTitle) return false;

    // 移除空格和標點符號進行比較
    const normalize = (str) => str.replace(/[\s\-:：，。、！？]/g, '').toLowerCase();
    const normalizedSearch = normalize(searchTitle);
    const normalizedFound = normalize(foundTitle);

    // 完全匹配
    if (normalizedSearch === normalizedFound) return true;

    // 包含關係（至少要包含60%的字）
    const minLength = Math.min(normalizedSearch.length, normalizedFound.length);
    const maxLength = Math.max(normalizedSearch.length, normalizedFound.length);

    if (normalizedFound.includes(normalizedSearch) || normalizedSearch.includes(normalizedFound)) {
        return minLength / maxLength > 0.6;
    }

    return false;
}

// 檢查是否為中文書（檢查語言）
function isChineseBook(volumeInfo) {
    const language = volumeInfo?.language;
    const title = volumeInfo?.title || '';

    // 檢查語言代碼
    if (language && (language === 'zh' || language === 'zh-TW' || language === 'zh-CN')) {
        return true;
    }

    // 檢查標題是否包含中文字
    const chineseRegex = /[\u4e00-\u9fa5]/;
    return chineseRegex.test(title);
}

// 優先搜尋中文版封面（嚴格驗證版）
async function tryGetBookCover(isbn, title, author, coverUrl = null) {
    console.log(`🔍 開始搜尋《${title}》的封面...`);

    // 策略 0: 優先使用手動指定的封面（最高優先權）
    if (coverUrl) {
        console.log(`✅ 使用手動指定的封面`);
        return { url: coverUrl, source: 'manual' };
    }

    // 策略 1A: 繁體中文 + 書名 + 作者（嚴格驗證）
    try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}&langRestrict=zh-TW&maxResults=10`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data.items) {
                for (let item of data.items) {
                    const volumeInfo = item.volumeInfo;
                    const foundTitle = volumeInfo?.title;

                    // 嚴格檢查：書名要匹配 + 必須是中文書 + 有圖片
                    if (isTitleMatch(title, foundTitle) && isChineseBook(volumeInfo)) {
                        const imageLinks = volumeInfo?.imageLinks;
                        if (imageLinks) {
                            let imageUrl = imageLinks.large || imageLinks.medium || imageLinks.thumbnail;
                            if (imageUrl) {
                                imageUrl = imageUrl.replace('http:', 'https:').replace('&edge=curl', '').replace('zoom=1', 'zoom=3');
                                console.log(`✅ 策略1A成功: 找到繁中版《${foundTitle}》`);
                                return { url: imageUrl, source: 'zh-TW', title: foundTitle };
                            }
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.log('策略1A失敗');
    }

    // 策略 1B: 簡體中文 + 書名 + 作者（嚴格驗證）
    try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}&langRestrict=zh-CN&maxResults=10`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data.items) {
                for (let item of data.items) {
                    const volumeInfo = item.volumeInfo;
                    const foundTitle = volumeInfo?.title;

                    if (isTitleMatch(title, foundTitle) && isChineseBook(volumeInfo)) {
                        const imageLinks = volumeInfo?.imageLinks;
                        if (imageLinks) {
                            let imageUrl = imageLinks.large || imageLinks.medium || imageLinks.thumbnail;
                            if (imageUrl) {
                                imageUrl = imageUrl.replace('http:', 'https:').replace('&edge=curl', '').replace('zoom=1', 'zoom=3');
                                console.log(`✅ 策略1B成功: 找到簡中版《${foundTitle}》`);
                                return { url: imageUrl, source: 'zh-CN', title: foundTitle };
                            }
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.log('策略1B失敗');
    }

    // 策略 2: 只用書名搜尋中文書（嚴格驗證）
    try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}&langRestrict=zh&maxResults=15`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data.items) {
                for (let item of data.items) {
                    const volumeInfo = item.volumeInfo;
                    const foundTitle = volumeInfo?.title;

                    if (isTitleMatch(title, foundTitle) && isChineseBook(volumeInfo)) {
                        const imageLinks = volumeInfo?.imageLinks;
                        if (imageLinks) {
                            let imageUrl = imageLinks.large || imageLinks.medium || imageLinks.thumbnail;
                            if (imageUrl) {
                                imageUrl = imageUrl.replace('http:', 'https:').replace('&edge=curl', '').replace('zoom=1', 'zoom=3');
                                console.log(`✅ 策略2成功: 找到中文版《${foundTitle}》`);
                                return { url: imageUrl, source: 'zh-title-only', title: foundTitle };
                            }
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.log('策略2失敗');
    }

    console.log('❌ 找不到匹配的中文封面，將使用設計封面');
    return null;
}

// 顯示書籍推薦
async function showBookRecommendation(mood) {
    const books = bookDatabase[mood];
    const randomBook = books[Math.floor(Math.random() * books.length)];

    // 隱藏心情選擇器
    moodSelector.style.display = 'none';

    // 更新書籍封面 - 先顯示載入中
    const bookCover = document.getElementById('bookCover');
    bookCover.style.background = 'linear-gradient(135deg, var(--primary-cyan), var(--primary-purple))';
    bookCover.innerHTML = `
        <div class="cover-content">
            <div class="loading-spinner">📚</div>
            <div class="cover-title" style="font-size: 1rem; margin-top: 20px;">載入封面中...</div>
        </div>
    `;

    // 更新書籍資訊
    document.getElementById('bookTitle').textContent = randomBook.title;
    document.getElementById('bookAuthor').textContent = `作者：${randomBook.author}`;
    document.getElementById('bookDescription').textContent = randomBook.description;

    // 更新標籤
    const tagsContainer = document.getElementById('bookTags');
    tagsContainer.innerHTML = '';
    randomBook.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });

    // 顯示結果
    resultContainer.classList.add('show');

    // 平滑滾動到結果
    setTimeout(() => {
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // 直接顯示設計封面（方案 A：穩定可靠）
    console.log(`🎨 顯示《${randomBook.title}》的設計封面`);
    bookCover.style.background = 'linear-gradient(135deg, var(--primary-cyan), var(--primary-purple))';
    bookCover.innerHTML = `
        <div class="cover-content">
            <div class="cover-emoji">${randomBook.emoji}</div>
            <div class="cover-title">${randomBook.title}</div>
            <div class="cover-divider"></div>
            <div class="cover-author">${randomBook.author}</div>
        </div>
    `;
}

// 粒子背景動畫
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 100;

        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 245, 255, ${particle.opacity})`;
            this.ctx.fill();
        });

        // 繪製連線
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 245, 255, ${0.15 * (1 - distance / 120)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// 頁面載入動畫
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);

    // 初始化粒子系統
    new ParticleSystem();
});
