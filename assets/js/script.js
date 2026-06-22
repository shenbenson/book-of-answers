/* ── Answer Data (merged: original site + Book of Answers design) ── */

const answers = [
    {"zh":"是的。","zht":"是的。","en":"Yes."},
    {"zh":"不是。","zht":"不是。","en":"No."},
    {"zh":"也许吧。","zht":"也許吧。","en":"Maybe."},
    {"zh":"再试一次。","zht":"再試一次。","en":"Try again."},
    {"zh":"时机未到。","zht":"時機未到。","en":"The time is not right."},
    {"zh":"放手也是一种智慧。","zht":"放手也是一種智慧。","en":"Letting go is a form of wisdom."},
    {"zh":"大胆一点。","zht":"大膽一點。","en":"Be bolder."},
    {"zh":"不要犹豫。","zht":"不要猶豫。","en":"Don't hesitate."},
    {"zh":"听从直觉。","zht":"聽從直覺。","en":"Trust your intuition."},
    {"zh":"你已经知道答案了。","zht":"你已經知道答案了。","en":"You already know the answer."},
    {"zh":"等待更好的时机。","zht":"等待更好的時機。","en":"Wait for a better time."},
    {"zh":"现在是最好的时候。","zht":"現在是最好的時候。","en":"Now is the best moment."},
    {"zh":"尝试新方法。","zht":"嘗試新方法。","en":"Try new methods."},
    {"zh":"放松心情。","zht":"放鬆心情。","en":"Relax."},
    {"zh":"相信自己。","zht":"相信自己。","en":"Believe in yourself."},
    {"zh":"你配得上更好的。","zht":"你配得上更好的。","en":"You deserve better."},
    {"zh":"别害怕失败。","zht":"別害怕失敗。","en":"Don't fear failure."},
    {"zh":"接受不确定性。","zht":"接受不確定性。","en":"Accept uncertainty."},
    {"zh":"答案藏在沉默中。","zht":"答案藏在沉默中。","en":"The answer lies in silence."},
    {"zh":"你的努力会有回报。","zht":"你的努力會有回報。","en":"Your efforts will pay off."},
    {"zh":"坚持下去。","zht":"堅持下去。","en":"Keep going."},
    {"zh":"转换角度看看。","zht":"轉換角度看看。","en":"Look from a different angle."},
    {"zh":"咨询朋友的意见。","zht":"諮詢朋友的意見。","en":"Consult your friends."},
    {"zh":"这不值得担心。","zht":"這不值得擔心。","en":"It's not worth worrying about."},
    {"zh":"它不会影响你。","zht":"它不會影響你。","en":"It won't affect you."},
    {"zh":"这是一次成长机会。","zht":"這是一次成長機會。","en":"This is a chance to grow."},
    {"zh":"你将遇到贵人。","zht":"你將遇到貴人。","en":"You will meet someone important."},
    {"zh":"保持低调。","zht":"保持低調。","en":"Stay low-key."},
    {"zh":"不要告诉任何人。","zht":"不要告訴任何人。","en":"Don't tell anyone."},
    {"zh":"与其担心，不如行动。","zht":"與其擔心，不如行動。","en":"Instead of worrying, take action."},
    {"zh":"做好最坏的打算。","zht":"做好最壞的打算。","en":"Prepare for the worst."},
    {"zh":"保持耐心。","zht":"保持耐心。","en":"Be patient."},
    {"zh":"机会正在靠近你。","zht":"機會正在靠近你。","en":"Opportunities are coming your way."},
    {"zh":"它会如你所愿发展。","zht":"它會如你所願發展。","en":"It will unfold as you wish."},
    {"zh":"现在不适合做决定。","zht":"現在不適合做決定。","en":"Now is not the time to decide."},
    {"zh":"继续观察。","zht":"繼續觀察。","en":"Keep observing."},
    {"zh":"这是个陷阱。","zht":"這是個陷阱。","en":"This is a trap."},
    {"zh":"放弃是明智的选择。","zht":"放棄是明智的選擇。","en":"Giving up is a wise choice."},
    {"zh":"是时候展开行动了。","zht":"是時候展開行動了。","en":"It's time to act."},
    {"zh":"这不是你真正想要的。","zht":"這不是你真正想要的。","en":"This is not what you really want."},
    {"zh":"这个决定会带来好运。","zht":"這個決定會帶來好運。","en":"This decision will bring good luck."},
    {"zh":"没必要太认真。","zht":"沒必要太認真。","en":"No need to take it too seriously."},
    {"zh":"你应该坚持原则。","zht":"你應該堅持原則。","en":"You should stick to your principles."},
    {"zh":"时间会告诉你答案。","zht":"時間會告訴你答案。","en":"Time will tell the answer."},
    {"zh":"不要过早暴露计划。","zht":"不要過早暴露計劃。","en":"Don't reveal your plans too early."},
    {"zh":"你低估了自己的影响力。","zht":"你低估了自己的影響力。","en":"You underestimate your influence."},
    {"zh":"有人在等你主动。","zht":"有人在等你主動。","en":"Someone is waiting for you to take initiative."},
    {"zh":"做你害怕的事。","zht":"做你害怕的事。","en":"Do what scares you."},
    {"zh":"可能会超出你预期。","zht":"可能會超出你預期。","en":"It might exceed your expectations."},
    {"zh":"试试不同的方法。","zht":"試試不同的方法。","en":"Try a different approach."},
    {"zh":"这是命运的安排。","zht":"這是命運的安排。","en":"This is fate's arrangement."},
    {"zh":"你已经准备好了。","zht":"你已經準備好了。","en":"You are ready."},
    {"zh":"这不重要。","zht":"這不重要。","en":"It doesn't matter."},
    {"zh":"你能应付得来。","zht":"你能應付得來。","en":"You can handle it."},
    {"zh":"相信过程。","zht":"相信過程。","en":"Trust the process."},
    {"zh":"也许结果不重要。","zht":"也許結果不重要。","en":"Maybe the result doesn't matter."},
    {"zh":"享受当下。","zht":"享受當下。","en":"Enjoy the moment."},
    {"zh":"停止担心未来。","zht":"停止擔心未來。","en":"Stop worrying about the future."},
    {"zh":"问问内心深处的自己。","zht":"問問內心深處的自己。","en":"Ask your inner self."},
    {"zh":"听听长辈的建议。","zht":"聽聽長輩的建議。","en":"Listen to your elders."},
    {"zh":"翻开新的一页。","zht":"翻開新的一頁。","en":"Turn over a new leaf."},
    {"zh":"保守秘密是关键。","zht":"保守秘密是關鍵。","en":"Keeping secrets is key."},
    {"zh":"值得尝试。","zht":"值得嘗試。","en":"Worth trying."},
    {"zh":"你需要休息。","zht":"你需要休息。","en":"You need rest."},
    {"zh":"答案可能在远方。","zht":"答案可能在遠方。","en":"The answer may be far away."},
    {"zh":"学会等待。","zht":"學會等待。","en":"Learn to wait."},
    {"zh":"这是一次考验。","zht":"這是一次考驗。","en":"This is a test."},
    {"zh":"无论如何都要坚持。","zht":"無論如何都要堅持。","en":"No matter what, persevere."},
    {"zh":"考虑长远影响。","zht":"考慮長遠影響。","en":"Consider the long-term impact."},
    {"zh":"结果可能出乎意料。","zht":"結果可能出乎意料。","en":"Results may be unexpected."},
    {"zh":"不要逃避现实。","zht":"不要逃避現實。","en":"Don't avoid reality."},
    {"zh":"集中注意力在目标上。","zht":"集中注意力在目標上。","en":"Focus on your goals."},
    {"zh":"你忽略了某些细节。","zht":"你忽略了某些細節。","en":"You overlooked some details."},
    {"zh":"先处理内心的情绪。","zht":"先處理內心的情緒。","en":"Deal with your emotions first."},
    {"zh":"你需要一个计划。","zht":"你需要一個計劃。","en":"You need a plan."},
    {"zh":"不要急于求成。","zht":"不要急於求成。","en":"Don't rush success."},
    {"zh":"成功近在咫尺。","zht":"成功近在咫尺。","en":"Success is near."},
    {"zh":"失败只是暂时的。","zht":"失敗只是暫時的。","en":"Failure is temporary."},
    {"zh":"你被误导了。","zht":"你被誤導了。","en":"You have been misled."},
    {"zh":"这是命中注定的缘分。","zht":"這是命中注定的緣分。","en":"This is destined fate."},
    {"zh":"注意你的表达方式。","zht":"注意你的表達方式。","en":"Mind your words."},
    {"zh":"机会不止这一次。","zht":"機會不止這一次。","en":"Opportunities come more than once."},
    {"zh":"有些事无法强求。","zht":"有些事無法強求。","en":"Some things can't be forced."},
    {"zh":"主动出击。","zht":"主動出擊。","en":"Take initiative."},
    {"zh":"保持开放的心态。","zht":"保持開放的心態。","en":"Keep an open mind."},
    {"zh":"不试试你永远不知道。","zht":"不試試你永遠不知道。","en":"You never know until you try."},
    {"zh":"看清楚事实真相。","zht":"看清楚事實真相。","en":"See the truth clearly."},
    {"zh":"你已经在正确的路上。","zht":"你已經在正確的路上。","en":"You are on the right path."},
    {"zh":"你值得拥有这一切。","zht":"你值得擁有這一切。","en":"You deserve all this."},
    {"zh":"它可能不值得你投入。","zht":"它可能不值得你投入。","en":"It may not be worth your investment."},
    {"zh":"追随你的热情。","zht":"追隨你的熱情。","en":"Follow your passion."},
    {"zh":"先处理眼前的事情。","zht":"先處理眼前的事情。","en":"Deal with the present first."},
    {"zh":"尝试独处。","zht":"嘗試獨處。","en":"Try solitude."},
    {"zh":"事情会自然解决。","zht":"事情會自然解決。","en":"Things will resolve naturally."},
    {"zh":"不要轻易承诺。","zht":"不要輕易承諾。","en":"Don't make promises lightly."},
    {"zh":"你不必迎合别人。","zht":"你不必迎合別人。","en":"You don't have to please others."},
    {"zh":"你已经做得够好了。","zht":"你已經做得夠好了。","en":"You have done enough."},
    {"zh":"不必太在意别人的看法。","zht":"不必太在意別人的看法。","en":"Don't care too much about others' opinions."},
    {"zh":"再给它一次机会。","zht":"再給它一次機會。","en":"Give it another chance."},
    {"zh":"你将获得意想不到的惊喜。","zht":"你將獲得意想不到的驚喜。","en":"You will get unexpected surprises."},
    {"zh":"一切都是最好的安排。","zht":"一切都是最好的安排。","en":"Everything is for the best."},
    {"zh":"你心中已有答案。","zht":"你心中已有答案。","en":"The answer is already in your heart."},
    {"zh":"答案并不唯一。","zht":"答案並不唯一。","en":"The answer is not unique."},
    {"zh":"走一步算一步。","zht":"走一步算一步。","en":"Take it step by step."},
    {"zh":"结果无关紧要，过程才是关键。","zht":"結果無關緊要，過程才是關鍵。","en":"The result doesn't matter, the process does."},
    {"zh":"放轻松，一切都会好起来。","zht":"放輕鬆，一切都會好起來。","en":"Relax, everything will be fine."},
    {"zh":"明天会更清晰。","zht":"明天會更清晰。","en":"Tomorrow will be clearer."},
    {"zh":"这将成为美好的回忆。","zht":"這將成為美好的回憶。","en":"This will become a beautiful memory."},
    {"zh":"你正被好运包围。","zht":"你正被好運包圍。","en":"You are surrounded by good luck."},
    {"zh":"如果你相信，它就会发生。","zht":"如果你相信，它就會發生。","en":"If you believe, it will happen."},
    {"zh":"你已经走得够远，现在可以休息一下了。","zht":"你已經走得夠遠，現在可以休息一下了。","en":"You've come far enough, now it's time to rest."},
    {"zh":"只要迈出第一步，一切都会不同。","zht":"只要邁出第一步，一切都會不同。","en":"Just take the first step, everything will change."},
    {"en":"Without a doubt","zh":"毫无疑问","zht":"毫無疑問"},
    {"en":"The signs point to yes","zh":"迹象指向肯定","zht":"跡象指向肯定"},
    {"en":"The stars align in your favor","zh":"星辰为你而排列","zht":"星辰為你而排列"},
    {"en":"Not in this lifetime","zh":"此生无望","zht":"此生無望"},
    {"en":"The answer lies within you","zh":"答案就在你心中","zht":"答案就在你心中"},
    {"en":"You already know the answer","zh":"你早已知晓答案","zht":"你早已知曉答案"},
    {"en":"Ask again when the moon is full","zh":"待月圆之时再问","zht":"待月圓之時再問"},
    {"en":"Trust the path before you","zh":"相信眼前的道路","zht":"相信眼前的道路"},
    {"en":"Do not force what is not meant to be","zh":"莫强求命中注定之事","zht":"莫強求命中注定之事"},
    {"en":"The universe conspires in your favor","zh":"宇宙正为你运转","zht":"宇宙正為你運轉"},
    {"en":"Let go and let be","zh":"放手，顺其自然","zht":"放手，順其自然"},
    {"en":"Not as soon as you hope","zh":"非你所望之时","zht":"非你所望之時"},
    {"en":"Patience will be rewarded","zh":"耐心终将得报","zht":"耐心終將得報"},
    {"en":"The time is not right","zh":"时机尚未成熟","zht":"時機尚未成熟"},
    {"en":"Proceed with quiet confidence","zh":"静心前行","zht":"靜心前行"},
    {"en":"A door is about to open","zh":"一扇门即将开启","zht":"一扇門即將開啟"},
    {"en":"What you seek also seeks you","zh":"你所寻者，亦在寻你","zht":"你所尋者，亦在尋你"},
    {"en":"The answer will come at dawn","zh":"答案将于黎明降临","zht":"答案將於黎明降臨"},
    {"en":"Do not look back","zh":"莫要回头","zht":"莫要回頭"},
    {"en":"All signs point to change","zh":"万象皆指向改变","zht":"萬象皆指向改變"},
    {"en":"The foundation is not yet solid","zh":"根基尚不稳固","zht":"根基尚不穩固"},
    {"en":"Yes, but not how you imagine","zh":"是，但非你所想","zht":"是，但非你所想"},
    {"en":"You must first listen","zh":"你须先静心聆听","zht":"你須先靜心聆聽"},
    {"en":"Release your attachment to the outcome","zh":"放下对结果的执念","zht":"放下對結果的執念"},
    {"en":"A hidden force guides you","zh":"一股隐秘之力引导着你","zht":"一股隱秘之力引導著你"},
    {"en":"Do not mistake motion for progress","zh":"莫将运动误为前进","zht":"莫將運動誤為前進"},
    {"en":"The answer is closer than it appears","zh":"答案近在咫尺","zht":"答案近在咫尺"},
    {"en":"Silence holds the answer","zh":"沉默中藏着答案","zht":"沉默中藏著答案"},
    {"en":"The unexpected will reveal itself","zh":"意外之事即将显现","zht":"意外之事即將顯現"},
    {"en":"You are on the right path","zh":"你走在正确的道路上","zht":"你走在正確的道路上"},
    {"en":"Look to the ones you trust","zh":"寻求你所信任之人","zht":"尋求你所信任之人"},
    {"en":"The question itself is the answer","zh":"问题本身即是答案","zht":"問題本身即是答案"},
    {"en":"Begin, and the way will appear","zh":"启程，路自现","zht":"啟程，路自現"},
    {"en":"Not everything requires action","zh":"并非所有事都需行动","zht":"並非所有事都需行動"},
    {"en":"Seek what endures","zh":"寻求恒久之物","zht":"尋求恆久之物"},
    {"en":"The wind shifts","zh":"风向已变","zht":"風向已變"},
    {"en":"Far less certain than it seems","zh":"远不如表面确定","zht":"遠不如表面確定"},
    {"en":"Dedicate yourself fully","zh":"全心投入","zht":"全心投入"},
    {"en":"An ending is a beginning in disguise","zh":"结局是伪装的开始","zht":"結局是偽裝的開始"},
    {"en":"Your intentions will carry you through","zh":"你的意愿将引领你","zht":"你的意願將引領你"},
    {"en":"This too shall pass","zh":"这也终将过去","zht":"這也終將過去"},
    {"en":"The cosmos is listening","zh":"宇宙在聆听","zht":"宇宙在聆聽"},
    {"en":"Step into the unknown","zh":"踏入未知","zht":"踏入未知"},
    {"en":"Others see more than you know","zh":"他人所见，远超你知","zht":"他人所見，遠超你知"},
    {"en":"Do not waver now","zh":"此刻莫要动摇","zht":"此刻莫要動搖"},
    {"en":"The heart already knows","zh":"心早已知晓","zht":"心早已知曉"},
    {"en":"Something is about to shift","zh":"某些事即将转变","zht":"某些事即將轉變"},
    {"en":"It is written in the stars","zh":"星宿早有定数","zht":"星宿早有定數"},
    {"en":"The old must make way for the new","zh":"旧物须让位于新","zht":"舊物須讓位於新"},
    {"en":"Wisdom comes to those who wait","zh":"智慧眷顾等待之人","zht":"智慧眷顧等待之人"},
    {"en":"More than you currently believe","zh":"远超你现在所信","zht":"遠超你現在所信"},
    {"en":"A small step reveals the way","zh":"小步自见大道","zht":"小步自見大道"},
    {"en":"The timing is not yours to choose","zh":"时机非你所能选择","zht":"時機非你所能選擇"},
    {"en":"What has been planted will grow","zh":"所种之物终将生长","zht":"所種之物終將生長"},
    {"en":"Resist the urge to control","zh":"抵制控制的冲动","zht":"抵制控制的衝動"},
    {"en":"The answer awaits your stillness","zh":"答案等待你的宁静","zht":"答案等待你的寧靜"},
    {"en":"Beneath the surface, all is well","zh":"表面之下，一切安好","zht":"表面之下，一切安好"},
    {"en":"Something greater is at work","zh":"更大的力量正在运作","zht":"更大的力量正在運作"},
    {"en":"Do not mistake doubt for wisdom","zh":"莫将疑惑误为智慧","zht":"莫將疑惑誤為智慧"},
    {"en":"Your path is uniquely yours","zh":"你的道路独属于你","zht":"你的道路獨屬於你"},
    {"en":"Fortune favors the patient","zh":"幸运眷顾耐心之人","zht":"幸運眷顧耐心之人"},
    {"en":"The veil between worlds is thin","zh":"两界之间，幕帘甚薄","zht":"兩界之間，幕帘甚薄"},
    {"en":"Do not second-guess yourself","zh":"莫要自我怀疑","zht":"莫要自我懷疑"},
    {"en":"The thread is already woven","zh":"命运之线早已织就","zht":"命運之線早已織就"},
    {"en":"Trust what you cannot yet see","zh":"相信你尚未见到之事","zht":"相信你尚未見到之事"},
    {"en":"Transformation awaits on the other side","zh":"彼岸等待着蜕变","zht":"彼岸等待著蛻變"},
    {"en":"Unlikely","zh":"不太可能","zht":"不太可能"},
    {"en":"Not now, but soon","zh":"暂时不是，但快了","zht":"暫時不是，但快了"},
    {"en":"All in good time","zh":"一切皆需时机","zht":"一切皆需時機"},
    {"en":"Only if you truly desire it","zh":"只有你真心渴望才能得到","zht":"只有你真心渴望才能得到"},
    {"en":"Remain open","zh":"保持开放","zht":"保持開放"},
    {"en":"The reward is greater than you imagine","zh":"回报远比你想象的丰厚","zht":"回報遠比你想象的豐厚"},
    {"en":"Seek clarity before proceeding","zh":"先求清晰，再行动","zht":"先求清晰，再行動"},
    {"en":"It has already been decided","zh":"一切早有定论","zht":"一切早有定論"},
    {"en":"Yield to the current","zh":"顺势而为","zht":"順勢而為"},
    {"en":"The answer is yes","zh":"答案是肯定的","zht":"答案是肯定的"},
    {"en":"Your timing is perfect","zh":"你的时机恰到好处","zht":"你的時機恰到好處"},
    {"en":"Not yet — but do not give up","zh":"尚未——但莫要放弃","zht":"尚未——但莫要放棄"},
    {"en":"What appears lost may yet return","zh":"失去之物或许会归来","zht":"失去之物或許會歸來"},
    {"en":"Look inward for the light","zh":"向内寻找光明","zht":"向內尋找光明"},
    {"en":"The answer requires courage","zh":"答案需要勇气","zht":"答案需要勇氣"}
];

/* ── Labels ── */

const labels = {
    zh: {
        oracle: "— 指引 —",
        main: "答案之书",
        sub: "Book of Answers",
        instruction: "心中默想你的问题\n翻开答案之书",
        open: "翻开此书",
        again: "再问一次",
        share: "分享此答案",
        copied: "已复制到剪贴板",
    },
    "zh-TW": {
        oracle: "— 指引 —",
        main: "答案之書",
        sub: "Book of Answers",
        instruction: "心中默想你的問題\n翻開答案之書",
        open: "翻開此書",
        again: "再問一次",
        share: "分享此答案",
        copied: "已複製到剪貼板",
    },
    en: {
        oracle: "— Guidance —",
        main: "Book of Answers",
        sub: "答案之书",
        instruction: "Hold your question in mind\nand open the book",
        open: "Open the Book",
        again: "Ask Again",
        share: "Share this answer",
        copied: "Copied to clipboard",
    },
};

const localeMap = { zh: "zh-CN", "zh-TW": "zh-TW", en: "en-US" };

/* ── State ── */

let currentLang = "zh";
let muted = localStorage.getItem("muted") === "true";
let state = "idle"; // idle | loading | revealed
let currentIndex = -1;
let revealTime = null;
let audioCtx = null;
let revealTimer = null;
let toastTimer = null;

/* ── DOM ── */

const $ = (id) => document.getElementById(id);
const dom = {};

function cacheDom() {
    dom.langBtns = {
        zh: $("langBtn-zh"),
        "zh-TW": $("langBtn-zh-TW"),
        en: $("langBtn-en"),
    };
    dom.muteBtn = $("muteButton");
    dom.iconSound = document.querySelector(".icon-sound");
    dom.iconMuted = document.querySelector(".icon-muted");
    dom.titleOracle = $("titleOracle");
    dom.titleMain = $("titleMain");
    dom.titleSub = $("titleSub");
    dom.bookFrame = $("bookFrame");
    dom.bookPrompt = $("bookPrompt");
    dom.bookAnswer = $("bookAnswer");
    dom.answerText = $("answerText");
    dom.answerDate = $("answerDate");
    dom.openBtn = $("openButton");
    dom.shareBtn = $("shareButton");
    dom.toast = $("toast");
    dom.year = $("year");
    dom.langPrompt = $("langPrompt");
    dom.langPromptBtns = document.querySelectorAll(".lang-prompt-btn");
}

/* ── Audio ── */

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function ensureAudioCtx() {
    const ctx = getAudioCtx();
    if (ctx.state === "suspended") {
        return ctx.resume().then(() => ctx);
    }
    return Promise.resolve(ctx);
}

function playPageTurn() {
    if (muted) return;
    ensureAudioCtx()
        .then((ctx) => {
            const sr = ctx.sampleRate;
            const n = Math.floor(sr * 0.11);
            const buf = ctx.createBuffer(1, n, sr);
            const d = buf.getChannelData(0);
            for (let i = 0; i < n; i++) {
                const t = i / n;
                d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.2) * 0.18;
            }
            const src = ctx.createBufferSource();
            src.buffer = buf;
            const filt = ctx.createBiquadFilter();
            filt.type = "bandpass";
            filt.frequency.value = 3800;
            filt.Q.value = 0.45;
            const gain = ctx.createGain();
            gain.gain.value = 0.8;
            src.connect(filt);
            filt.connect(gain);
            gain.connect(ctx.destination);
            src.start();
        })
        .catch(() => {});
}

function playChime() {
    if (muted) return;
    ensureAudioCtx()
        .then((ctx) => {
            const now = ctx.currentTime;
            [[396, 0, 2.4, 0.12], [528, 0.07, 2.2, 0.09], [660, 0.14, 1.8, 0.06]].forEach(([freq, delay, dur, vol]) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "sine";
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0, now + delay);
                gain.gain.linearRampToValueAtTime(vol, now + delay + 0.018);
                gain.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + delay);
                osc.stop(now + delay + dur);
            });
        })
        .catch(() => {});
}

/* ── Language ── */

function detectLanguage() {
    const saved = localStorage.getItem("preferredLang");
    if (saved && labels[saved]) return { lang: saved, needsPrompt: false };

    const bl = navigator.language || navigator.userLanguage || "";
    if (bl.startsWith("zh-TW") || bl.startsWith("zh-HK")) return { lang: "zh-TW", needsPrompt: false };
    if (bl.startsWith("zh")) return { lang: "zh", needsPrompt: false };
    return { lang: "en", needsPrompt: true };
}

function changeLanguage(lang, persist = true) {
    currentLang = lang;
    if (persist) localStorage.setItem("preferredLang", lang);
    const lab = labels[lang];

    document.documentElement.lang = localeMap[lang];

    Object.entries(dom.langBtns).forEach(([code, btn]) => {
        btn.classList.toggle("active", code === lang);
    });

    dom.titleOracle.textContent = lab.oracle;
    dom.titleMain.textContent = lab.main;
    dom.titleSub.textContent = lab.sub;
    dom.shareBtn.textContent = lab.share;

    if (state === "revealed" && currentIndex >= 0) {
        const answer = answers[currentIndex];
        dom.answerText.textContent = answer[lang === "zh-TW" ? "zht" : lang] || answer.en;
        dom.answerDate.textContent = formatDate(revealTime);
        dom.openBtn.textContent = lab.again;
    } else {
        dom.bookPrompt.textContent = lab.instruction;
        dom.openBtn.textContent = lab.open;
    }
}

/* ── Book ── */

function pickAnswer() {
    let idx;
    do {
        idx = Math.floor(Math.random() * answers.length);
    } while (idx === currentIndex && answers.length > 1);
    currentIndex = idx;
    return answers[idx];
}

function formatDate(date) {
    if (!date) return "";
    const locale = localeMap[currentLang] || "en-US";
    const d = date.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
    const t = date.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
    return `${d}  ·  ${t}`;
}

function resetBook() {
    state = "idle";
    const lab = labels[currentLang];

    dom.bookFrame.classList.remove("revealing");
    dom.bookPrompt.textContent = lab.instruction;
    dom.bookPrompt.classList.remove("hidden");
    dom.bookAnswer.classList.add("hidden");
    dom.bookAnswer.setAttribute("aria-hidden", "true");

    dom.openBtn.textContent = lab.open;
    dom.openBtn.disabled = false;
    dom.shareBtn.classList.add("hidden");
}

function handleOpenClick() {
    if (state === "loading") return;

    if (state === "revealed") {
        resetBook();
        return;
    }

    if (revealTimer) clearTimeout(revealTimer);
    state = "loading";
    dom.openBtn.disabled = true;
    dom.bookFrame.classList.add("revealing");
    playPageTurn();

    const answer = pickAnswer();

    revealTimer = setTimeout(() => {
        dom.bookFrame.classList.remove("revealing");

        playChime();
        revealTime = new Date();

        const lab = labels[currentLang];
        const text = answer[currentLang === "zh-TW" ? "zht" : currentLang] || answer.en;

        dom.answerText.textContent = text;
        dom.answerDate.textContent = formatDate(revealTime);
        dom.bookPrompt.classList.add("hidden");
        dom.bookAnswer.classList.remove("hidden");
        dom.bookAnswer.removeAttribute("aria-hidden");

        state = "revealed";
        dom.openBtn.textContent = lab.again;
        dom.openBtn.disabled = false;
        dom.shareBtn.classList.remove("hidden");
    }, 460);
}

/* ── Mute ── */

function applyMuteUI() {
    dom.muteBtn.setAttribute("aria-pressed", String(muted));
    dom.iconSound.classList.toggle("hidden", muted);
    dom.iconMuted.classList.toggle("hidden", !muted);
}

function toggleMute() {
    muted = !muted;
    localStorage.setItem("muted", String(muted));
    applyMuteUI();
}

/* ── Share ── */

function shareAnswer() {
    if (currentIndex < 0) return;
    const answer = answers[currentIndex];
    const text = answer[currentLang === "zh-TW" ? "zht" : currentLang] || answer.en;
    const dateStr = formatDate(revealTime);
    const url = window.location.href;
    const title = `✦ ${labels[currentLang].main}`;
    const body = `"${text}"\n\n— ${dateStr}\n\n${url}`;

    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(`${title}\n\n${body}`)
            .then(() => showToast(labels[currentLang].copied))
            .catch(() => {});
    }
}

/* ── Toast ── */

function showToast(msg) {
    dom.toast.textContent = msg;
    dom.toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => dom.toast.classList.remove("show"), 2600);
}

/* ── Init ── */

document.addEventListener("DOMContentLoaded", () => {
    cacheDom();

    dom.year.textContent = new Date().getFullYear();

    const detected = detectLanguage();
    currentLang = detected.lang;
    changeLanguage(currentLang, !detected.needsPrompt);
    applyMuteUI();

    if (detected.needsPrompt) {
        dom.langPrompt.classList.remove("hidden");
    } else {
        dom.bookFrame.classList.remove("hidden");
        dom.openBtn.classList.remove("hidden");
    }

    dom.langPromptBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            changeLanguage(btn.dataset.lang);
            dom.langPrompt.classList.add("hidden");
            dom.bookFrame.classList.remove("hidden");
            dom.openBtn.classList.remove("hidden");
        });
    });

    Object.entries(dom.langBtns).forEach(([code, btn]) => {
        btn.addEventListener("click", () => changeLanguage(code));
    });

    dom.muteBtn.addEventListener("click", toggleMute);
    dom.openBtn.addEventListener("click", handleOpenClick);
    dom.shareBtn.addEventListener("click", shareAnswer);

    document.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && document.activeElement === dom.openBtn) {
            e.preventDefault();
            handleOpenClick();
        }
    });
});
