const emoji = document.querySelector("#emoji");
const popSound = document.querySelector("#popSound");

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
  "💩",
  "🤡",
  "👻",
  "👽",
  "🤖",
  "🤮",
  "🥸",
  "😜",
  "😈",
];

function setNewEmoji() {
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  popSound.currentTime = 0;
  popSound.play().catch((err) => console.log("Sound play prevented:", err));
}

emoji.addEventListener("mouseover", () => {
  setNewEmoji();
});

let currentMode = "copy";

function setMode(mode) {
  currentMode = mode;
  localStorage.setItem("emojiMode", mode);
  updateModeToggleButton();
}

function updateModeToggleButton() {
  if (currentMode === "copy") {
    modeToggle.innerText = "📋 Copy Mode";
    modeToggle.classList.remove("explosion-mode");
  } else {
    modeToggle.innerText = "💥 Explosion Mode";
    modeToggle.classList.add("explosion-mode");
  }
}

function loadSavedMode() {
  const savedMode = localStorage.getItem("emojiMode");
  if (savedMode) {
    currentMode = savedMode;
  }
  updateModeToggleButton();
}

modeToggle.addEventListener("click", () => {
  currentMode = currentMode === "copy" ? "explosion" : "copy";
  setMode(currentMode);
});

function showNotification(message, duration = 1500) {
  const existing = document.querySelector(".notification");
  if (existing) existing.remove();

  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

function handleCopyMode(e) {
  setNewEmoji();
  const currentEmoji = emoji.innerText;

  navigator.clipboard
    .writeText(currentEmoji)
    .then(() => {
      if (navigator.vibrate) navigator.vibrate(50);

      emoji.style.opacity = "0.6";
      setTimeout(() => {
        emoji.style.opacity = "1";
      }, 200);

      showNotification("Copied! 📋", 1500);
    })
    .catch((err) => {
      console.error("Copy failed:", err);
      showNotification("Copy failed ❌", 1500);
    });
}

function createParticle(emojiChar, x, y) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.innerText = emojiChar;

  const angle = Math.random() * Math.PI * 2;
  const velocity = 150 + Math.random() * 100;
  const tx = Math.cos(angle) * velocity;
  const ty = Math.sin(angle) * velocity - 50;

  particle.style.left = x + "px";
  particle.style.top = y + "px";
  particle.style.setProperty("--tx", tx + "px");
  particle.style.setProperty("--ty", ty + "px");

  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 800);
}

function handleExplosionMode(e) {
  const explodingChar = emoji.innerText;
  emoji.style.opacity = "0";
  emoji.style.transform = "scale(0.8)";

  for (let i = 0; i < 15; i++) {
    createParticle(explodingChar, e.clientX, e.clientY);
  }

  setTimeout(() => {
    setNewEmoji();
    emoji.style.opacity = "1";
    emoji.style.transform = "scale(1.1)";
    setTimeout(() => {
      emoji.style.transform = "";
    }, 150);
  }, 400);
}

emoji.addEventListener("click", (e) => {
  if (currentMode === "copy") {
    handleCopyMode(e);
  } else if (currentMode === "explosion") {
    handleExplosionMode(e);
  }
});

loadSavedMode();
setNewEmoji();
