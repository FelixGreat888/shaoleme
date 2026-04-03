const products = [
  {
    id: "claude-code",
    name: "Claude Code",
    subtitle: "写得像要成了，扣得像真成了。",
    icon: "./assets/claude-code.png",
    effect: "ash",
    effectLabel: "额度耗尽 · 请等至下午3点",
    theme: {
      bg1: "#090909",
      bg2: "#1a1512",
      bg3: "#281711",
      accent: "#ff9a39",
      accent2: "#ffd07e",
      text: "#f5efe3",
      muted: "rgba(245, 239, 227, 0.72)",
      soft: "rgba(245, 239, 227, 0.46)",
      line: "rgba(255, 245, 230, 0.12)",
      ember: "rgba(255, 154, 57, 0.44)",
      glow: "rgba(255, 205, 120, 0.24)",
    },
    titles: [
      "沉痛悼念 Claude Code 专项燃料",
      "又一段昂贵上下文离开了我们",
    ],
    epitaphs: [
      "它曾无限接近可用，直到上下文走到了尽头。",
      "你给了它需求，它还你一张更长的账单。",
    ],
  },
  {
    id: "minimax",
    name: "MiniMax",
    subtitle: "生成得像开闸放水，结算时也像。",
    icon: "./assets/minimax-official.png",
    effect: "pulse",
    effectLabel: "高能快返 · 余额快闪",
    theme: {
      bg1: "#120d12",
      bg2: "#251116",
      bg3: "#412124",
      accent: "#ff7458",
      accent2: "#ffe0d5",
      text: "#fff2ee",
      muted: "rgba(255, 242, 238, 0.72)",
      soft: "rgba(255, 242, 238, 0.44)",
      line: "rgba(255, 242, 238, 0.14)",
      ember: "rgba(255, 116, 88, 0.42)",
      glow: "rgba(255, 190, 171, 0.22)",
    },
    titles: [
      "沉痛悼念被 MiniMax 一键带走的海量算力",
      "它响应很快，你的余额碎得更快",
    ],
    epitaphs: [
      "它跑得越丝滑，你越容易忘记余额也在跟着一起滑走。",
      "演示里像未来已来，账单里像未来预支。",
    ],
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    subtitle: "看似深度思考，本质深度排队。",
    icon: "./assets/deepseek.png",
    effect: "shatter",
    effectLabel: "服务器繁忙 · 思考中断",
    theme: {
      bg1: "#09101a",
      bg2: "#10172c",
      bg3: "#231444",
      accent: "#7fa2ff",
      accent2: "#d5dcff",
      text: "#eef2ff",
      muted: "rgba(238, 242, 255, 0.72)",
      soft: "rgba(238, 242, 255, 0.44)",
      line: "rgba(238, 242, 255, 0.14)",
      ember: "rgba(127, 162, 255, 0.42)",
      glow: "rgba(164, 183, 255, 0.22)",
    },
    titles: [
      "沉痛悼念被 DeepSeek 临时搁浅的那部分算力",
      "深度思考未必有结果，深度扣费一定有回执",
    ],
    epitaphs: [
      "它看上去正在认真推理，实际上只是在认真消耗你的耐心。",
      "服务器一忙起来，你的灵感和额度就一起悬空了。",
    ],
  },
  {
    id: "cursor",
    name: "Cursor",
    subtitle: "一边帮你补代码，一边帮你补消费记录。",
    icon: "./assets/cursor.png",
    effect: "cascade",
    effectLabel: "请求用尽 · 代码回滚",
    theme: {
      bg1: "#07111f",
      bg2: "#0c1f36",
      bg3: "#10314d",
      accent: "#4cb7ff",
      accent2: "#d6f6ff",
      text: "#ecfbff",
      muted: "rgba(236, 251, 255, 0.72)",
      soft: "rgba(236, 251, 255, 0.44)",
      line: "rgba(236, 251, 255, 0.14)",
      ember: "rgba(76, 183, 255, 0.42)",
      glow: "rgba(137, 209, 255, 0.22)",
    },
    titles: [
      "缅怀 Cursor 帮你加速燃烧的那部分预算",
      "那一夜，代码在生长，token 在消亡",
    ],
    epitaphs: [
      "你以为在省时间，它其实在帮你换一种花钱方式。",
      "自动补全了工程，也自动补全了支出。",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    subtitle: "会多模态，也会多线程消耗你的耐心。",
    icon: "./assets/gemini-official.svg",
    effect: "smoke",
    effectLabel: "双核闪念 · 灵感失联",
    theme: {
      bg1: "#08101d",
      bg2: "#111a30",
      bg3: "#1d1745",
      accent: "#6f93ff",
      accent2: "#e5e9ff",
      text: "#f3f5ff",
      muted: "rgba(243, 245, 255, 0.72)",
      soft: "rgba(243, 245, 255, 0.44)",
      line: "rgba(243, 245, 255, 0.14)",
      ember: "rgba(111, 147, 255, 0.42)",
      glow: "rgba(181, 197, 255, 0.22)",
    },
    titles: [
      "悼念那笔被 Gemini 温柔卷走的上下文",
      "多模态还没起飞，额度先被托运了",
    ],
    epitaphs: [
      "它看上去像在理解一切，实际上先理解了你的额度上限。",
      "问得越立体，扣得越具体。",
    ],
  },
  {
    id: "codex",
    name: "Codex",
    subtitle: "刚写到关键一行，下一秒开始集体失忆。",
    icon: "./assets/codex.svg",
    effect: "glitch",
    effectLabel: "正在写这页代码 · 突然失忆",
    theme: {
      bg1: "#060607",
      bg2: "#18191d",
      bg3: "#2b1218",
      accent: "#6ff2c7",
      accent2: "#d8fff4",
      text: "#effff9",
      muted: "rgba(239, 255, 249, 0.72)",
      soft: "rgba(239, 255, 249, 0.44)",
      line: "rgba(239, 255, 249, 0.14)",
      ember: "rgba(111, 242, 199, 0.42)",
      glow: "rgba(176, 255, 228, 0.2)",
    },
    titles: [
      "沉痛悼念被 Codex 写没的那点上下文记忆",
      "写着写着就失忆，扣着扣着就超支",
    ],
    epitaphs: [
      "它刚刚还胸有成竹，下一秒就把整个上下文抛到了脑后。",
      "最可怕的不是写错，而是它写错以后还像什么都没发生过。",
    ],
  },
  {
    id: "kimi",
    name: "Kimi",
    subtitle: "上下文越拉越长，心碎战线也一起拉长。",
    icon: "./assets/kimi.png",
    effect: "stack",
    effectLabel: "超长上下文 · 记到最后心碎",
    theme: {
      bg1: "#090909",
      bg2: "#151517",
      bg3: "#1b2234",
      accent: "#6ca7ff",
      accent2: "#e8f1ff",
      text: "#f4f7ff",
      muted: "rgba(244, 247, 255, 0.72)",
      soft: "rgba(244, 247, 255, 0.44)",
      line: "rgba(244, 247, 255, 0.14)",
      ember: "rgba(108, 167, 255, 0.42)",
      glow: "rgba(184, 214, 255, 0.22)",
    },
    titles: [
      "沉痛悼念被 Kimi 超长记忆慢慢嚼碎的 token",
      "它记住了前文后文，唯独没记住要替你省钱",
    ],
    epitaphs: [
      "上下文拉得够长，心碎的战线也跟着被无限拉长。",
      "它像在认真陪你熬夜，只是顺手把预算也陪没了。",
    ],
  },
  {
    id: "other",
    name: "其他产品",
    subtitle: "名字你来写，锅它来背。",
    icon: "./assets/other-product.svg",
    effect: "ember",
    effectLabel: "提桶跑路 · 域名失效",
    theme: {
      bg1: "#080808",
      bg2: "#181412",
      bg3: "#271a17",
      accent: "#df7348",
      accent2: "#ffe0ce",
      text: "#fff3eb",
      muted: "rgba(255, 243, 235, 0.72)",
      soft: "rgba(255, 243, 235, 0.44)",
      line: "rgba(255, 243, 235, 0.14)",
      ember: "rgba(223, 115, 72, 0.42)",
      glow: "rgba(255, 187, 153, 0.22)",
    },
    titles: [
      "谨以此页，悼念一笔说不清但确实没了的 token",
      "名字可以忘，账单不会忘",
    ],
    epitaphs: [
      "具体烧给了谁已不重要，重要的是它们回不来了。",
      "你不愿再提它的名字，但系统依然记得。",
    ],
  },
];

const sharedQuotes = [
  "智商偶尔在线，扣费从不手软。",
  "差一点能跑起来，差很多才付得起。",
  "需求没落地，额度先落地了。",
  "代码仍有 bug，token 已经安息。",
  "它给了我希望，也给了我消费明细。",
  "此处长眠着一个本来很有希望的 session。",
  "不是我花得快，是上下文走得急。",
  "人还在改，token 先走了。",
  "功能未必上线，账单一定准时。",
];

const randomMemorials = [
  "昨晚那次没保存的 Claude Code session",
  "那版差一点就上线的功能",
  "我本以为只要再问一次就能修好的 bug",
  "半夜两点那次过于自信的 agent 模式",
  "那个看起来很像答案的回复",
  "本来只想顺手改一下的需求",
];

const randomTokens = [81920, 131072, 220000, 512000, 824731, 1388888, 421337];
const STEP_DURATION_MS = 4200;
const MIN_VISIBLE_STEPS = 34;
const MAX_VISIBLE_STEPS = 42;
const DEFAULT_TOKEN_NOTE = "填入你逝去的 Token 数（支持大悲咒级海量额度）。";
const DEFAULT_MEMORIAL = "“那个就差一句 Prompt 就能改变世界的点子”";
const DEFAULT_PRODUCT_HINT = "悬停或点击卡片，查看它的生前罪状。";
const BURN_WHISPER = "平时的 API 额度瞬间蒸发，今天的电子纸钱我们慢慢烧，主打一个陪伴。";
const AUDIO_SOURCE_CANDIDATES = {
  bgm: ["./background.mp3", "./assets/background.mp3"],
  fire: ["./fire-start.mp3", "./assets/fire-start.mp3"],
};
const POSTER_QR_SOURCE = "./assets/shaoleme-qr.png";
const DONATION_QR_SOURCE = "./assets/wechat-pay.jpg";
const bgm = new Audio(AUDIO_SOURCE_CANDIDATES.bgm[0]);
bgm.loop = true;
bgm.volume = 0.5;
bgm.preload = "auto";
bgm.muted = false;
const fireSfx = new Audio(AUDIO_SOURCE_CANDIDATES.fire[0]);
fireSfx.volume = 0.88;
fireSfx.preload = "auto";
fireSfx.muted = false;
const posterQrImage = new Image();
const posterQrReady = new Promise((resolve) => {
  posterQrImage.addEventListener("load", () => resolve(posterQrImage), { once: true });
  posterQrImage.addEventListener("error", () => resolve(null), { once: true });
});
posterQrImage.src = POSTER_QR_SOURCE;
const donationQrImage = new Image();
const donationQrReady = new Promise((resolve) => {
  donationQrImage.addEventListener("load", () => resolve(donationQrImage), { once: true });
  donationQrImage.addEventListener("error", () => resolve(null), { once: true });
});
donationQrImage.src = DONATION_QR_SOURCE;
const PRODUCT_HINTS = {
  "claude-code": "死因：额度耗尽 · 请等至下午3点",
  minimax: "死因：高能快返 · 余额同步蒸发",
  deepseek: "死因：服务器繁忙 · 思考意外中断",
  cursor: "死因：Premium 请求用尽 · 代码回滚",
  gemini: "死因：多模态排队 · 灵感半路失联",
  codex: "死因：正在写这页代码 · 突然失忆",
  kimi: "死因：超长上下文 · 记到最后只剩心碎",
  other: "死因：提桶跑路 · 域名已失效",
};
const posterConfig = {
  claude: {
    name: "Claude Code",
    epitaph: "它曾无限接近完美，直到你的余额走到了尽头。",
    subquote: "需求没落地，额度先落地了。",
  },
  minimax: {
    name: "MiniMax",
    epitaph: "它反应快到像读心术，扣费也快到像抢劫。",
    subquote: "输出像开挂，余额像开闸。",
  },
  deepseek: {
    name: "DeepSeek",
    epitaph: "愿天堂的 GPU 永远不需要排队，阿门。",
    subquote: "深度思考两分钟，一看代码全落空。",
  },
  cursor: {
    name: "Cursor",
    epitaph: "一顿 Cmd+K 猛如虎，一看请求剩十五。",
    subquote: "补全很智能，账单很伤人。",
  },
  gemini: {
    name: "Gemini",
    epitaph: "它的答案常常很大，你的上下文窗口常常更大地死去。",
    subquote: "看完演示很心动，看到账单更心碎。",
  },
  codex: {
    name: "Codex",
    epitaph: "写了一半突然失忆，只留给后人满屏的 //TODO。",
    subquote: "正在重构这页代码，突然忘了自己在干嘛。",
  },
  kimi: {
    name: "Kimi",
    epitaph: "它记住了你说过的每一句，却没放过你账户里的每一分。",
    subquote: "上下文很长，快乐很短。",
  },
  other: {
    name: "野生套壳 API",
    epitaph: "主打一个陪伴，可惜它提桶跑路太快。",
    subquote: "连名字都没被记住的赛博过客。",
  },
};
const posterConfigKeysByProductId = {
  "claude-code": "claude",
  minimax: "minimax",
  deepseek: "deepseek",
  cursor: "cursor",
  gemini: "gemini",
  codex: "codex",
  kimi: "kimi",
  other: "other",
};

const state = {
  selectedProductId: "claude-code",
  isRunning: false,
  currentResult: null,
  tokenNoteTimer: null,
  productHintTimer: null,
  audioMuted: false,
  ritualToken: 0,
  burnFrameId: 0,
  burnBurstTimer: 0,
  burnSlipTimers: [],
  incenseFrameId: 0,
};

const elements = {
  appShell: document.querySelector("#appShell"),
  controlPanel: document.querySelector("#controlPanel"),
  ritualPanel: document.querySelector("#ritualPanel"),
  form: document.querySelector("#ritualForm"),
  productField: document.querySelector(".product-field"),
  productGrid: document.querySelector("#productGrid"),
  productHint: document.querySelector("#productHint"),
  customProductName: document.querySelector("#customProductName"),
  tokenInput: document.querySelector("#tokenInput"),
  memorialInput: document.querySelector("#memorialInput"),
  nicknameInput: document.querySelector("#nicknameInput"),
  audioToggle: document.querySelector("#audioToggle"),
  startButton: document.querySelector("#startButton"),
  randomButton: document.querySelector("#randomButton"),
  rerollButton: document.querySelector("#rerollButton"),
  saveButton: document.querySelector("#saveButton"),
  tokenNote: document.querySelector("#tokenNote"),
  altarScreen: document.querySelector("#altarScreen"),
  progressBadge: document.querySelector("#progressBadge"),
  ritualHeadline: document.querySelector("#ritualHeadline"),
  ritualSubline: document.querySelector("#ritualSubline"),
  burnCore: document.querySelector("#burnCore"),
  stageProductName: document.querySelector("#stageProductName"),
  stageEffectLabel: document.querySelector("#stageEffectLabel"),
  stageTokenCount: document.querySelector("#stageTokenCount"),
  memorialStrip: document.querySelector("#memorialStrip"),
  productWhisper: document.querySelector("#productWhisper"),
  particleField: document.querySelector("#particleField"),
  offeringStream: document.querySelector("#offeringStream"),
  remainingCount: document.querySelector("#remainingCount"),
  offeredCount: document.querySelector("#offeredCount"),
  bundleCount: document.querySelector("#bundleCount"),
  ritualProgressFill: document.querySelector("#ritualProgressFill"),
  ritualMeterLine: document.querySelector("#ritualMeterLine"),
  incenseSticks: Array.from(document.querySelectorAll(".incense-stick")),
  resultWrapper: document.querySelector("#resultWrapper"),
  posterTitle: document.querySelector("#posterTitle"),
  posterNumber: document.querySelector("#posterNumber"),
  posterProduct: document.querySelector("#posterProduct"),
  posterDate: document.querySelector("#posterDate"),
  posterMemorialName: document.querySelector("#posterMemorialName"),
  posterNickname: document.querySelector("#posterNickname"),
  posterMetaModel: document.querySelector("#posterMetaModel"),
  posterEpitaph: document.querySelector("#posterEpitaph"),
  posterSubquote: document.querySelector("#posterSubquote"),
  posterDuration: document.querySelector("#posterDuration"),
  posterMerit: document.querySelector("#posterMerit"),
};

buildProductGrid();
bindEvents();
attachAudioFallback(bgm, AUDIO_SOURCE_CANDIDATES.bgm);
attachAudioFallback(fireSfx, AUDIO_SOURCE_CANDIDATES.fire);
syncAudioToggle();
applyProductTheme(getSelectedProduct());
renderIdleStage();
setView("setup");
showSelectedOrDefaultProductHint();
bootBackgroundAudio();

function bindEvents() {
  elements.form.addEventListener("submit", handleStart);
  elements.randomButton.addEventListener("click", handleRandomize);
  elements.rerollButton.addEventListener("click", handleReroll);
  elements.saveButton.addEventListener("click", handleSavePoster);
  elements.audioToggle.addEventListener("click", handleAudioToggle);

  elements.tokenInput.addEventListener("input", handleTokenInput);
  elements.memorialInput.addEventListener("input", renderIdleStage);
  elements.nicknameInput.addEventListener("input", renderIdleStage);
  elements.customProductName.addEventListener("input", renderIdleStage);

  elements.tokenInput.addEventListener("focus", startTokenNoteRotation);
  elements.tokenInput.addEventListener("blur", stopTokenNoteRotation);
}

function setView(view) {
  elements.appShell.dataset.view = view;
  const isSetup = view === "setup";
  elements.controlPanel.hidden = !isSetup;
  elements.ritualPanel.hidden = isSetup;
}

function attachAudioFallback(audio, candidates) {
  audio.__candidateIndex = 0;
  audio.addEventListener("error", () => {
    const nextIndex = audio.__candidateIndex + 1;
    if (nextIndex >= candidates.length) {
      return;
    }
    audio.__candidateIndex = nextIndex;
    audio.src = candidates[nextIndex];
    audio.load();
  });
}

function syncAudioToggle() {
  const muted = state.audioMuted;
  elements.audioToggle.dataset.muted = muted ? "true" : "false";
  elements.audioToggle.setAttribute("aria-label", muted ? "开启音效" : "关闭音效");
}

function primeAudioAutoplayUnlock() {
  const resumeAudio = async () => {
    await ensureAudioPlayback({ playBgm: true, playFire: false });
  };
  ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, resumeAudio, { once: true, passive: true });
  });
}

async function bootBackgroundAudio() {
  if (state.audioMuted) {
    return;
  }
  const started = await safePlayAudio(bgm);
  if (!started) {
    primeAudioAutoplayUnlock();
  }
}

function setAudioMuted(muted, options = {}) {
  const { pauseBgm = muted } = options;
  state.audioMuted = muted;
  bgm.muted = muted;
  fireSfx.muted = muted;
  if (pauseBgm && muted) {
    bgm.pause();
  }
  syncAudioToggle();
}

async function safePlayAudio(audio, options = {}) {
  const { restart = false } = options;
  try {
    if (restart) {
      audio.currentTime = 0;
    }
    await audio.play();
    return true;
  } catch (error) {
    console.warn(`Audio playback failed for ${audio.src}`, error);
    return false;
  }
}

async function ensureAudioPlayback(options = {}) {
  const { playBgm = true, playFire = false } = options;
  setAudioMuted(false, { pauseBgm: false });

  if (playFire) {
    await safePlayAudio(fireSfx, { restart: true });
  }

  if (playBgm && bgm.paused) {
    await safePlayAudio(bgm);
  }
}

async function handleAudioToggle() {
  if (state.audioMuted) {
    await ensureAudioPlayback({ playBgm: true, playFire: false });
    return;
  }
  setAudioMuted(true);
}

function buildProductGrid() {
  elements.productGrid.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("label");
    card.className = "product-card";
    card.dataset.productId = product.id;
    card.innerHTML = `
      <input type="radio" name="productId" value="${product.id}" ${product.id === state.selectedProductId ? "checked" : ""}>
      <div class="product-card-top">
        <img src="${product.icon}" alt="${product.name} 图标">
      </div>
      <div class="product-card-name">${product.name}</div>
    `;

    const radio = card.querySelector("input");
    card.addEventListener("mouseenter", () => {
      setProductHintText(getProductHintText(product.id));
    });
    card.addEventListener("mouseleave", () => {
      showSelectedOrDefaultProductHint();
    });
    radio.addEventListener("change", () => {
      state.selectedProductId = product.id;
      setSelectedCardStyles();
      applyProductTheme(product);
      renderIdleStage();
      showSelectedOrDefaultProductHint();
    });
    elements.productGrid.appendChild(card);
  });

  setSelectedCardStyles();
}

function setSelectedCardStyles() {
  const selectedId = state.selectedProductId;
  elements.productGrid.querySelectorAll(".product-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.productId === selectedId);
  });
  syncCustomProductInput();
}

function syncCustomProductInput() {
  const isCustomActive = state.selectedProductId === "other";
  elements.productField.classList.toggle("is-custom-active", isCustomActive);
  elements.customProductName.disabled = !isCustomActive;
}

function getProductHintText(productId) {
  return PRODUCT_HINTS[productId] || DEFAULT_PRODUCT_HINT;
}

function getSelectedProductIdFromDom() {
  const checked = elements.productGrid.querySelector('input[name="productId"]:checked');
  return checked ? checked.value : "";
}

function showSelectedOrDefaultProductHint() {
  const selectedId = getSelectedProductIdFromDom();
  setProductHintText(selectedId ? getProductHintText(selectedId) : DEFAULT_PRODUCT_HINT);
}

function setProductHintText(text) {
  if (!elements.productHint) {
    return;
  }
  if (state.productHintTimer) {
    window.clearTimeout(state.productHintTimer);
    state.productHintTimer = null;
  }
  elements.productHint.classList.add("is-updating");
  state.productHintTimer = window.setTimeout(() => {
    elements.productHint.textContent = text;
    elements.productHint.classList.remove("is-updating");
    state.productHintTimer = null;
  }, 90);
}

function handleTokenInput(event) {
  const digits = event.target.value.replace(/\D+/g, "");
  if (!digits) {
    event.target.value = "";
    renderIdleStage();
    return;
  }

  const clamped = clampToken(digits);
  event.target.value = String(clamped);
  renderIdleStage();
}

function startTokenNoteRotation() {
  stopTokenNoteRotation();
  const notes = ["这已经够买几次心碎了", "你确定是这个数？"];
  let index = 0;
  elements.tokenNote.textContent = notes[index];
  state.tokenNoteTimer = window.setInterval(() => {
    index = (index + 1) % notes.length;
    elements.tokenNote.textContent = notes[index];
  }, 1300);
}

function stopTokenNoteRotation() {
  if (state.tokenNoteTimer) {
    window.clearInterval(state.tokenNoteTimer);
    state.tokenNoteTimer = null;
  }
  elements.tokenNote.textContent = DEFAULT_TOKEN_NOTE;
}

function handleRandomize() {
  if (state.isRunning) {
    return;
  }

  const product = products[Math.floor(Math.random() * products.length)];
  state.selectedProductId = product.id;
  const productInput = elements.productGrid.querySelector(`input[value="${product.id}"]`);
  if (productInput) {
    productInput.checked = true;
  }

  elements.tokenInput.value = String(randomTokens[Math.floor(Math.random() * randomTokens.length)]);
  elements.memorialInput.value = randomMemorials[Math.floor(Math.random() * randomMemorials.length)];
  if (!elements.nicknameInput.value.trim() && Math.random() > 0.5) {
    elements.nicknameInput.value = ["匿名香客", "昨夜工程师", "工位游魂", "不愿透露姓名的 PM"][Math.floor(Math.random() * 4)];
  }

  setSelectedCardStyles();
  applyProductTheme(product);
  renderIdleStage();
  showSelectedOrDefaultProductHint();
}

function handleReroll() {
  if (state.isRunning) {
    return;
  }

  state.currentResult = null;
  state.ritualToken = 0;
  resetBurnVisuals();
  setView("setup");
  elements.resultWrapper.classList.remove("is-visible");
  elements.resultWrapper.hidden = true;
  elements.altarScreen.dataset.phase = "idle";
  renderIdleStage();
  elements.controlPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  elements.tokenInput.focus();
}

async function handleStart(event) {
  event.preventDefault();
  if (state.isRunning) {
    return;
  }

  await ensureAudioPlayback({ playBgm: true, playFire: true });

  const data = getFormData();
  const plan = getBurnPlan(data.tokenCount);
  const ritualToken = Date.now();
  state.ritualToken = ritualToken;
  state.isRunning = true;
  state.currentResult = null;
  setFormDisabled(true);
  resetBurnVisuals();
  setView("ritual");
  elements.resultWrapper.classList.remove("is-visible");
  elements.resultWrapper.hidden = true;
  applyProductTheme(data.product);
  renderBurnMeterPreview(data.tokenCount, plan);
  elements.ritualPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  setStagePhase({
    phase: "inventory",
    badge: "灵前点数",
    headline: "正在清点遗体",
    subline: `本次共计损失 ${formatNumber(data.tokenCount)} Token，火盆已预热，请主祭人节哀。`,
    footer: `逝者：${data.memorialName}`,
  });
  elements.productWhisper.textContent = BURN_WHISPER;
  createParticles(34);
  await wait(2600);

  if (state.ritualToken !== ritualToken) {
    state.isRunning = false;
    setFormDisabled(false);
    return;
  }

  await runBurnSequence(data, plan, ritualToken);

  if (state.ritualToken !== ritualToken) {
    state.isRunning = false;
    setFormDisabled(false);
    return;
  }

  setStagePhase({
    phase: "ascended",
    badge: "礼成谢幕",
    headline: "尘归尘，账归账",
    subline: `共 ${formatNumber(data.tokenCount)} Token 已尽数化作量子飞灰，今日就送到这里。`,
    footer: `灵位：${data.product.name} · 已全部入灰`,
  });
  elements.productWhisper.textContent = "礼成之后，愿你下一次开 Session 前，先想起今天这场赛博告别。";
  renderBurnMeter({
    remaining: 0,
    offered: data.tokenCount,
    bundleText: `${formatNumber(plan.stepCount)} / ${formatNumber(plan.stepCount)} 叠`,
    progress: 1,
    line: "系统已经为您慢火细熬完毕。纸灰落定，今天这场赛博葬礼正式礼成。",
  });
  updateStageCard({ product: data.product, tokenCount: 0 });
  await wait(2400);

  renderResult(data, plan);
  setFormDisabled(false);
  state.isRunning = false;
  setView("result");
  elements.resultWrapper.hidden = false;
  elements.resultWrapper.classList.add("is-visible");
  elements.resultWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setStagePhase(config) {
  elements.altarScreen.dataset.phase = config.phase;
  elements.progressBadge.textContent = config.badge;
  elements.ritualHeadline.textContent = config.headline;
  elements.ritualSubline.textContent = config.subline;
  elements.memorialStrip.textContent = config.footer;
}

function renderIdleStage() {
  if (state.isRunning) {
    return;
  }

  const data = getFormData();
  resetBurnVisuals();
  setIncenseProgress(0);
  elements.altarScreen.dataset.phase = "idle";
  elements.progressBadge.textContent = "时辰未到 (等风来)";
  elements.ritualHeadline.textContent = "请先在左侧填写“算力死亡证明”。";
  elements.ritualSubline.textContent = "一旦点火，你的怨气将伴随显卡的轰鸣，化作量子飞灰直达云端。";
  elements.memorialStrip.textContent = `逝者：${data.memorialName}`;
  updateStageCard(data);
  renderBurnMeterPreview(data.tokenCount);
  elements.productWhisper.textContent = "“你以为它在进行深度思考，其实它在算计你的信用卡。”";

  if (!state.currentResult) {
    renderPosterPreview(data);
  }
}

function updateStageCard(data) {
  elements.stageProductName.textContent = data.product.name;
  elements.stageEffectLabel.textContent = "";
  elements.stageTokenCount.textContent = formatNumber(data.tokenCount);
}

async function runBurnSequence(data, plan, ritualToken) {
  let offeredBundles = 0;

  setStagePhase({
    phase: "burning",
    badge: "上香进度 · 第 1 叠",
    headline: "火盆已启，纸钱即将入炉",
    subline: `整场共备下 ${formatNumber(plan.stepCount)} 叠 Token 冥币，请主祭人耐心观礼。`,
    footer: `祭奠人：${data.nicknameDisplay}`,
  });
  elements.productWhisper.textContent = BURN_WHISPER;
  createParticles(20);
  startIncenseSync(plan.totalDuration, ritualToken);

  for (let stepIndex = 0; stepIndex < plan.steps.length; stepIndex += 1) {
    if (state.ritualToken !== ritualToken) {
      resetBurnVisuals();
      return;
    }

    const chunkTokens = plan.steps[stepIndex];
    const offeredBefore = offeredBundles;
    offeredBundles += chunkTokens;
    const isLastStep = stepIndex === plan.steps.length - 1;
    const progress = (stepIndex + 1) / plan.steps.length;
    const offered = isLastStep ? data.tokenCount : Math.min(data.tokenCount, offeredBundles);
    const remaining = Math.max(0, data.tokenCount - offered);
    const burnedThisStep = offered - offeredBefore;

    spawnOfferingSlip(chunkTokens, stepIndex, plan.steps.length);
    elements.progressBadge.textContent = `上香进度 · 第 ${formatNumber(stepIndex + 1)} 叠`;
    elements.ritualHeadline.textContent = `第 ${formatNumber(stepIndex + 1)} 叠 Token 冥币正在剧烈燃烧`;
    elements.ritualSubline.textContent = `青烟直上云端服务器，本次为您物理超度了 ${formatNumber(burnedThisStep)} Token。`;
    elements.memorialStrip.textContent = `祭奠人：${data.nicknameDisplay} · 第 ${formatNumber(stepIndex + 1)} / ${formatNumber(plan.stepCount)} 叠`;
    updateStageCard({ product: data.product, tokenCount: remaining });
    renderBurnMeter({
      remaining,
      offered,
      bundleText: `${formatNumber(stepIndex + 1)} / ${formatNumber(plan.stepCount)} 叠`,
      progress,
      line: `系统正在为您慢火细熬。每 ${(STEP_DURATION_MS / 1000).toFixed(1)} 秒超度一叠，确保你的每一枚 Token 都死得明明白白。`,
    });

    await wait(STEP_DURATION_MS);
  }

  setIncenseProgress(1);
  resetBurnVisuals({ preserveParticles: false, preserveMeter: true, preserveProgress: true, preserveIncense: true });
}

function getBurnPlan(tokenCount) {
  const desiredSteps = clamp(34 + Math.floor(Math.log10(tokenCount + 1) * 2), MIN_VISIBLE_STEPS, MAX_VISIBLE_STEPS);
  const stepCount = Math.max(1, Math.min(tokenCount, desiredSteps));
  const steps = splitTokenCount(tokenCount, stepCount);
  return {
    stepCount,
    steps,
    totalDuration: stepCount * STEP_DURATION_MS,
  };
}

function renderBurnMeterPreview(tokenCount, plan = getBurnPlan(tokenCount)) {
  renderBurnMeter({
    remaining: tokenCount,
    offered: 0,
    bundleText: `0 / ${formatNumber(plan.stepCount)} 叠`,
    progress: 0,
    line: `系统正在为您慢火细熬。每 ${(STEP_DURATION_MS / 1000).toFixed(1)} 秒超度一叠，预计全程约 ${Math.round((plan.stepCount * STEP_DURATION_MS) / 6000) / 10} 分钟。`,
  });
}

function renderBurnMeter({ remaining, offered, bundleText, progress, line }) {
  elements.remainingCount.textContent = formatNumber(remaining);
  elements.offeredCount.textContent = formatNumber(offered);
  elements.bundleCount.textContent = bundleText;
  elements.ritualProgressFill.style.width = `${Math.round(progress * 100)}%`;
  elements.ritualMeterLine.textContent = line;
}

function spawnOfferingSlip(chunkTokens, stepIndex, totalSteps) {
  const slip = document.createElement("div");
  slip.className = "offer-slip";
  slip.style.setProperty("--start-x", `${(Math.random() - 0.5) * 72}px`);
  slip.style.setProperty("--drift-x", `${(Math.random() - 0.5) * 180}px`);
  slip.style.setProperty("--rise", `${180 + Math.random() * 90}px`);
  slip.style.setProperty("--rotate", `${(Math.random() - 0.5) * 8}deg`);
  slip.style.setProperty("--spin", `${(Math.random() - 0.5) * 10}deg`);
  slip.style.setProperty("--flight", `${STEP_DURATION_MS + 1800}ms`);
  slip.innerHTML = `
    <span class="offer-slip-value">本叠焚去</span>
    <strong class="offer-slip-count">${formatCompactCount(chunkTokens)}</strong>
    <span class="offer-slip-multi">TOKEN · 第 ${stepIndex + 1} / ${totalSteps} 叠</span>
  `;
  elements.offeringStream.appendChild(slip);

  const removeTimer = window.setTimeout(() => {
    slip.remove();
    state.burnSlipTimers = state.burnSlipTimers.filter((timer) => timer !== removeTimer);
  }, STEP_DURATION_MS + 2200);
  state.burnSlipTimers.push(removeTimer);
}

function resetBurnVisuals(options = {}) {
  const { preserveParticles = false, preserveMeter = false, preserveProgress = false, preserveIncense = false } = options;
  if (state.burnFrameId) {
    window.cancelAnimationFrame(state.burnFrameId);
    state.burnFrameId = 0;
  }
  if (state.burnBurstTimer) {
    window.clearInterval(state.burnBurstTimer);
    state.burnBurstTimer = 0;
  }
  if (state.incenseFrameId) {
    window.cancelAnimationFrame(state.incenseFrameId);
    state.incenseFrameId = 0;
  }
  state.burnSlipTimers.forEach((timer) => window.clearTimeout(timer));
  state.burnSlipTimers = [];
  elements.offeringStream.innerHTML = "";
  if (!preserveParticles) {
    elements.particleField.innerHTML = "";
  }
  if (!preserveMeter) {
    elements.remainingCount.textContent = "0";
    elements.offeredCount.textContent = "0";
    elements.bundleCount.textContent = "0 / 0 叠";
    elements.ritualMeterLine.textContent = "";
  }
  if (!preserveProgress) {
    elements.ritualProgressFill.style.width = "0%";
  }
  if (!preserveIncense) {
    setIncenseProgress(0);
  }
}

function startIncenseSync(totalDuration, ritualToken) {
  if (state.incenseFrameId) {
    window.cancelAnimationFrame(state.incenseFrameId);
    state.incenseFrameId = 0;
  }

  const startedAt = performance.now();
  const tick = (now) => {
    if (state.ritualToken !== ritualToken) {
      state.incenseFrameId = 0;
      return;
    }

    const progress = clamp((now - startedAt) / totalDuration, 0, 1);
    setIncenseProgress(progress);

    if (progress < 1) {
      state.incenseFrameId = window.requestAnimationFrame(tick);
      return;
    }

    state.incenseFrameId = 0;
  };

  state.incenseFrameId = window.requestAnimationFrame(tick);
}

function setIncenseProgress(progress) {
  const curveFactors = [1.04, 0.98, 1.02];
  elements.incenseSticks.forEach((stick, index) => {
    const curved = progress === 0 ? 0 : progress === 1 ? 1 : Math.pow(progress, curveFactors[index] || 1);
    const burnY = 6 + curved * 88;
    stick.style.setProperty("--burn-y", `${burnY}px`);
    stick.style.setProperty("--ember-opacity", `${0.95 - curved * 0.25}`);
    stick.style.setProperty("--smoke-opacity", `${0.18 + (1 - curved) * 0.12}`);
  });
}

function splitTokenCount(totalTokens, stepCount) {
  if (stepCount <= 1) {
    return [totalTokens];
  }

  const weights = Array.from({ length: stepCount }, (_, index) => {
    const phase = index / Math.max(1, stepCount - 1);
    const ceremonyCurve = 0.82 + Math.sin(phase * Math.PI) * 0.36;
    const randomFactor = 0.72 + Math.random() * 0.7;
    return ceremonyCurve * randomFactor;
  });

  const weightSum = weights.reduce((sum, weight) => sum + weight, 0);
  const rawChunks = weights.map((weight) => (totalTokens * weight) / weightSum);
  const chunks = rawChunks.map((value) => Math.max(1, Math.floor(value)));

  let assigned = chunks.reduce((sum, value) => sum + value, 0);
  let diff = totalTokens - assigned;

  if (diff > 0) {
    const addOrder = rawChunks
      .map((value, index) => ({ index, remainder: value - Math.floor(value) }))
      .sort((left, right) => right.remainder - left.remainder);
    let cursor = 0;
    while (diff > 0) {
      chunks[addOrder[cursor % addOrder.length].index] += 1;
      diff -= 1;
      cursor += 1;
    }
  } else if (diff < 0) {
    const subtractOrder = chunks
      .map((value, index) => ({ index, value }))
      .sort((left, right) => right.value - left.value);
    let cursor = 0;
    while (diff < 0 && subtractOrder.length) {
      const target = subtractOrder[cursor % subtractOrder.length].index;
      if (chunks[target] > 1) {
        chunks[target] -= 1;
        diff += 1;
      }
      cursor += 1;
    }
  }

  return chunks;
}

function getPosterConfigForProduct(product) {
  const configKey = posterConfigKeysByProductId[product.id] || "other";
  const baseConfig = posterConfig[configKey] || posterConfig.other;
  const resolvedName = product.id === "other" ? product.name || baseConfig.name : baseConfig.name;
  return {
    key: configKey,
    name: resolvedName,
    epitaph: baseConfig.epitaph,
    subquote: baseConfig.subquote,
  };
}

function buildPosterPayload(data, plan = getBurnPlan(data.tokenCount)) {
  const config = getPosterConfigForProduct(data.product);
  const durationSeconds = Math.max(12, Math.round(plan.totalDuration / 1000));
  const meritValue = Math.max(12, Math.min(99, Math.round(plan.stepCount)));
  const product = { ...data.product, name: config.name };

  return {
    ...data,
    product,
    title: `沉痛悼念被 ${config.name} 无情吞噬的脑细胞与 Token`,
    epitaph: config.epitaph,
    subquote: config.subquote,
    durationText: `${durationSeconds} 秒 (慢火细熬)`,
    meritText: `+${meritValue}`,
  };
}

function renderResult(data, plan) {
  state.currentResult = buildPosterPayload(data, plan);
  renderPoster(state.currentResult);
}

function renderPosterPreview(data) {
  renderPoster(buildPosterPayload(data));
}

function renderPoster(result) {
  elements.posterTitle.textContent = result.title;
  elements.posterNumber.textContent = formatNumber(result.tokenCount);
  elements.posterProduct.textContent = result.product.name;
  elements.posterDate.textContent = `${formatNumber(result.tokenCount)} Token 已于清明化为量子泡沫，史称“API大出血事件”。`;
  elements.posterMemorialName.textContent = result.memorialName;
  elements.posterNickname.textContent = result.nicknameDisplay;
  elements.posterMetaModel.textContent = result.product.name;
  elements.posterEpitaph.textContent = result.epitaph;
  elements.posterSubquote.textContent = result.subquote;
  elements.posterDuration.textContent = result.durationText;
  elements.posterMerit.textContent = result.meritText;
}

async function handleSavePoster() {
  const button = elements.saveButton;
  if (button.dataset.saving === "true") {
    return;
  }

  const restoreLabel = button.textContent;
  button.dataset.saving = "true";
  button.disabled = true;
  button.textContent = "正在生成海报...";
  await wait(16);

  const result = state.currentResult || buildPosterPayload(getFormData());
  const posterData = { ...result };
  try {
    const canvas = await drawPosterCanvas(posterData);
    const filename = `烧了么-${sanitizeFilename(posterData.product.name)}-${posterData.tokenCount}.png`;
    try {
      downloadPosterDataUrl(canvas.toDataURL("image/png"), filename);
    } catch (dataUrlError) {
      console.warn("Data URL export failed, falling back to blob export", dataUrlError);
      const blob = await canvasToBlob(canvas);
      downloadPosterBlob(blob, filename);
    }
    button.textContent = "已保存海报";
  } catch (error) {
    console.error("Failed to save poster", error);
    button.textContent = "保存失败，点我重试";
  } finally {
    window.setTimeout(() => {
      button.dataset.saving = "false";
      button.disabled = false;
      button.textContent = restoreLabel;
    }, 1200);
  }
}

async function drawPosterCanvas(result) {
  const scale = 2;
  const width = 720;
  const height = 1400;
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  const theme = result.product.theme;
  const background = ctx.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, theme.bg1);
  background.addColorStop(0.55, theme.bg2);
  background.addColorStop(1, theme.bg3);
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  const halo = ctx.createRadialGradient(width * 0.5, height * 0.38, 20, width * 0.5, height * 0.38, 280);
  halo.addColorStop(0, hexToRgba(theme.accent, 0.24));
  halo.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 220; i += 1) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.05})`;
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 1.6 + 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  drawRoundedRect(ctx, 44, 44, width - 88, height - 88, 30, "rgba(7, 7, 7, 0.78)", "rgba(255,255,255,0.08)");

  ctx.fillStyle = hexToRgba(theme.accent2, 0.12);
  ctx.fillRect(82, 122, width - 164, 1);

  ctx.fillStyle = theme.accent2;
  ctx.font = '600 13px "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
  ctx.fillText("CYBER QINGMING", 88, 96);
  ctx.textAlign = "right";
  ctx.fillText(result.product.name, width - 88, 96);
  ctx.textAlign = "left";

  drawRoundedRect(ctx, 88, 126, width - 176, 42, 21, "rgba(255,255,255,0.03)", hexToRgba(theme.accent2, 0.14));
  ctx.fillStyle = theme.text;
  ctx.font = '600 18px "Songti SC", "STSong", serif';
  ctx.textAlign = "center";
  ctx.fillText("【 算 力 阵 亡 通 知 书 】", width / 2, 153);
  ctx.textAlign = "left";

  ctx.fillStyle = theme.text;
  ctx.font = '700 38px "Songti SC", "STSong", serif';
  const titleLines = wrapText(ctx, result.title, width - 176);
  let cursorY = 222;
  titleLines.forEach((line) => {
    ctx.fillText(line, 88, cursorY);
    cursorY += 48;
  });

  drawRoundedRect(ctx, 88, cursorY + 24, width - 176, 166, 28, "rgba(255,255,255,0.03)", "rgba(255,255,255,0.06)");
  ctx.fillStyle = theme.accent2;
  ctx.font = '700 98px "Georgia", "Times New Roman", serif';
  ctx.textAlign = "center";
  ctx.fillText(formatNumber(result.tokenCount), width / 2, cursorY + 126);
  ctx.font = '600 16px "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
  ctx.fillText("TOKENS", width / 2, cursorY + 152);
  ctx.textAlign = "left";

  const metaTop = cursorY + 222;
  drawRoundedRect(ctx, 88, metaTop, width - 176, 244, 26, "rgba(255,255,255,0.025)", "rgba(255,255,255,0.06)");
  ctx.fillStyle = theme.text;
  ctx.font = '400 19px "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
  wrapText(ctx, `${formatNumber(result.tokenCount)} Token 已于清明化为量子泡沫，史称“API大出血事件”。`, width - 214).forEach((line, index) => {
    ctx.fillText(line, 108, metaTop + 40 + index * 30);
  });

  drawCanvasMetaRow(ctx, 108, metaTop + 108, width - 108, "逝者", result.memorialName, theme, false);
  drawCanvasMetaRow(ctx, 108, metaTop + 154, width - 108, "大冤种", result.nicknameDisplay, theme, false);
  drawCanvasMetaRow(ctx, 108, metaTop + 200, width - 108, "肇事模型", result.product.name, theme, true);

  const epitaphTop = metaTop + 274;
  drawRoundedRect(ctx, 88, epitaphTop, width - 176, 170, 26, "rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)");
  ctx.fillStyle = theme.text;
  ctx.font = '700 28px "Songti SC", "STSong", serif';
  let lineY = epitaphTop + 54;
  wrapText(ctx, result.epitaph, width - 216).forEach((line) => {
    ctx.fillText(line, 108, lineY);
    lineY += 38;
  });
  ctx.fillStyle = hexToRgba(theme.text, 0.72);
  ctx.font = '400 20px "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
  wrapText(ctx, result.subquote, width - 216).forEach((line) => {
    ctx.fillText(line, 108, lineY + 12);
    lineY += 30;
  });

  const settlementTop = epitaphTop + 190;
  drawRoundedRect(ctx, 88, settlementTop, width - 176, 110, 24, "rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)");
  drawCanvasMetaRow(ctx, 108, settlementTop + 40, width - 108, "本次超度耗时", result.durationText, theme, false, false);
  drawCanvasMetaRow(ctx, 108, settlementTop + 80, width - 108, "积攒赛博功德", result.meritText, theme, true, false);

  const footerTop = settlementTop + 140;
  drawRoundedRect(ctx, 88, footerTop, width - 176, 156, 26, "rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)");
  ctx.fillStyle = theme.text;
  ctx.font = '700 22px "Songti SC", "STSong", serif';
  ctx.fillText("烧了么", 108, footerTop + 48);
  ctx.fillStyle = hexToRgba(theme.text, 0.68);
  ctx.font = '400 16px "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
  ctx.fillText("今年清明不烧纸，烧 token", 108, footerTop + 78);
  ctx.fillText("扫码进入 烧了么", width - 252, footerTop + 38);
  drawRoundedRect(ctx, width - 188, footerTop + 50, 80, 80, 18, "rgba(255,255,255,0.03)", hexToRgba(theme.accent2, 0.18));
  const qrImage = posterQrImage.complete
    ? (posterQrImage.naturalWidth > 0 ? posterQrImage : null)
    : await posterQrReady;
  if (qrImage) {
    drawRoundedImage(ctx, qrImage, width - 180, footerTop + 58, 64, 64, 14);
  } else {
    ctx.strokeStyle = hexToRgba(theme.accent2, 0.18);
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(width - 178, footerTop + 60, 60, 60);
    ctx.setLineDash([]);
    ctx.fillStyle = hexToRgba(theme.accent2, 0.5);
    ctx.font = '600 11px "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("QR", width - 148, footerTop + 96);
    ctx.textAlign = "left";
  }

  return canvas;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    if (!canvas.toBlob) {
      try {
        const dataUrl = canvas.toDataURL("image/png");
        const blob = dataUrlToBlob(dataUrl);
        resolve(blob);
      } catch (error) {
        reject(error);
      }
      return;
    }

    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
        return;
      }

      try {
        resolve(dataUrlToBlob(canvas.toDataURL("image/png")));
      } catch (error) {
        reject(error);
      }
    }, "image/png");
  });
}

function dataUrlToBlob(dataUrl) {
  const [header, data] = dataUrl.split(",");
  const match = header.match(/data:(.*?);base64/);
  const mimeType = match ? match[1] : "image/png";
  const binary = window.atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mimeType });
}

function downloadPosterDataUrl(dataUrl, filename) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  window.setTimeout(() => {
    link.remove();
  }, 1000);
}

function downloadPosterBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  window.setTimeout(() => {
    URL.revokeObjectURL(objectUrl);
    link.remove();
  }, 1000);
}

function applyProductTheme(product) {
  document.body.dataset.product = product.id;
  elements.altarScreen.dataset.effect = product.effect;
  const root = document.documentElement;
  root.style.setProperty("--bg-1", product.theme.bg1);
  root.style.setProperty("--bg-2", product.theme.bg2);
  root.style.setProperty("--bg-3", product.theme.bg3);
  root.style.setProperty("--accent", product.theme.accent);
  root.style.setProperty("--accent-2", product.theme.accent2);
  root.style.setProperty("--accent-gold", product.theme.accent2);
  root.style.setProperty("--text", product.theme.text);
  root.style.setProperty("--muted", product.theme.muted);
  root.style.setProperty("--soft", product.theme.soft);
  root.style.setProperty("--line", product.theme.line);
  root.style.setProperty("--ember", product.theme.ember);
  root.style.setProperty("--glow", product.theme.glow);
  if (!state.isRunning) {
    elements.productWhisper.textContent = "“你以为它在进行深度思考，其实它在算计你的信用卡。”";
  }
}

function createParticles(count = 28) {
  const fragment = document.createDocumentFragment();
  elements.particleField.innerHTML = "";
  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--size", `${Math.random() * 6 + 2}px`);
    particle.style.setProperty("--delay", `${Math.random() * 0.8}s`);
    particle.style.setProperty("--drift", `${(Math.random() - 0.5) * 160}px`);
    fragment.appendChild(particle);
  }
  elements.particleField.appendChild(fragment);
}

function getFormData() {
  const baseProduct = getSelectedProduct();
  const tokenCount = clampToken(elements.tokenInput.value || "250000");
  const memorialName = sanitizeText(elements.memorialInput.value, DEFAULT_MEMORIAL, 28);
  const nickname = sanitizeText(elements.nicknameInput.value, "", 12);
  const nicknameDisplay = nickname || "匿名香客";
  const customProductName = sanitizeText(elements.customProductName.value, "野生套壳 API", 20);
  const product = baseProduct.id === "other" ? { ...baseProduct, name: customProductName } : baseProduct;

  updateStageCard({
    product,
    tokenCount,
  });

  return {
    product,
    tokenCount,
    memorialName,
    nickname,
    nicknameDisplay,
  };
}

function getSelectedProduct() {
  return products.find((product) => product.id === state.selectedProductId) || products[0];
}

function setFormDisabled(disabled) {
  Array.from(elements.form.elements).forEach((field) => {
    field.disabled = disabled;
  });
  elements.startButton.disabled = disabled;
  elements.randomButton.disabled = disabled;
  elements.rerollButton.disabled = disabled;
  elements.saveButton.disabled = disabled && !state.currentResult;
}

function clampToken(value) {
  const parsed = Number.parseInt(String(value).replace(/\D+/g, ""), 10);
  if (!Number.isFinite(parsed) || parsed < 1) {
    return 250000;
  }
  return Math.min(parsed, 999999999);
}

function sanitizeText(value, fallback, maxLength) {
  const trimmed = String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
  return trimmed || fallback;
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-CN").format(value);
}

function formatCompactCount(value) {
  if (value < 10000) {
    return formatNumber(value);
  }
  if (value < 100000000) {
    const wan = value / 10000;
    return `${wan >= 100 ? Math.round(wan) : wan.toFixed(1).replace(/\.0$/, "")}万`;
  }
  const yi = value / 100000000;
  return `${yi.toFixed(1).replace(/\.0$/, "")}亿`;
}

function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function wait(duration) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function wrapText(ctx, text, maxWidth) {
  const chars = Array.from(text);
  const lines = [];
  let currentLine = "";

  chars.forEach((char) => {
    const next = currentLine + char;
    if (ctx.measureText(next).width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = char;
      return;
    }
    currentLine = next;
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function drawCanvasMetaRow(ctx, startX, baselineY, endX, label, value, theme, accentValue = false, drawDivider = true) {
  ctx.save();
  ctx.font = '600 15px "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
  ctx.fillStyle = hexToRgba(theme.text, 0.58);
  ctx.fillText(label, startX, baselineY);

  const labelWidth = ctx.measureText(label).width;
  const valueWidth = ctx.measureText(value).width;
  const dotsStart = startX + labelWidth + 18;
  const dotsEnd = endX - valueWidth - 12;

  if (dotsEnd > dotsStart) {
    ctx.strokeStyle = hexToRgba(theme.text, 0.12);
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(dotsStart, baselineY - 5);
    ctx.lineTo(dotsEnd, baselineY - 5);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.fillStyle = accentValue ? "rgba(235, 177, 91, 0.96)" : theme.text;
  ctx.textAlign = "right";
  ctx.fillText(value, endX, baselineY);
  ctx.textAlign = "left";

  if (drawDivider) {
    ctx.strokeStyle = hexToRgba(theme.text, 0.08);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(startX, baselineY + 18);
    ctx.lineTo(endX, baselineY + 18);
    ctx.stroke();
  }

  ctx.restore();
}

function sanitizeFilename(value) {
  return value.replace(/[^\p{Letter}\p{Number}\-_]+/gu, "-");
}

function drawRoundedRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.stroke();
}

function drawRoundedImage(ctx, image, x, y, width, height, radius) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(image, x, y, width, height);
  ctx.restore();
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const full = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;
  const red = Number.parseInt(full.slice(0, 2), 16);
  const green = Number.parseInt(full.slice(2, 4), 16);
  const blue = Number.parseInt(full.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
