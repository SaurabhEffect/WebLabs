// v4.0

const emoji = document.querySelector("#emoji");
const popSound = document.querySelector("#popSound");
const modeToggle = document.querySelector("#modeToggle");
const themeToggle = document.querySelector("#themeToggle");

let throttleTimeout = null;
let isEmojiFleeing = false;
let emojis = [];
let currentMode = "copy";
let activeCategory = "all";

async function loadEmojis() {
  try {
    const response = await fetch("emojis.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    emojis = data;
    loadLastEmoji();
    if (!emoji.innerText) {
      setNewEmoji();
      moveEmoji();
    }
  } catch (error) {
    console.error("Failed to load emojis:", error);
    emoji.innerText = "❌";
    emoji.setAttribute("aria-label", "Error loading emojis");
  }
}

function loadLastEmoji() {
  const savedEmoji = localStorage.getItem("lastEmoji");
  if (savedEmoji) {
    try {
      const emojiObj = JSON.parse(savedEmoji);
      if (emojiObj && emojiObj.char && emojiObj.name) {
        emoji.innerText = emojiObj.char;
        emoji.setAttribute("aria-label", emojiObj.name);
      }
    } catch (error) {
      console.log("Could not load saved emoji", error);
      localStorage.removeItem("lastEmoji");
    }
  }
}

function setNewEmoji() {
  let filteredEmojis = emojis;
  if (activeCategory !== "all") {
    filteredEmojis = emojis.filter((e) => e.category === activeCategory);
  }
  if (filteredEmojis.length === 0) {
    filteredEmojis = emojis;
  }
  const randomEmoji =
    filteredEmojis[Math.floor(Math.random() * filteredEmojis.length)];

  if (randomEmoji) {
    emoji.innerText = randomEmoji.char;
    emoji.setAttribute("aria-label", randomEmoji.name);
    localStorage.setItem("lastEmoji", JSON.stringify(randomEmoji));
  } else {
    emoji.innerText = "🤔";
    emoji.setAttribute("aria-label", "Thinking face");
  }
  popSound.currentTime = 0;
  popSound.play().catch((err) => console.log("Sound play prevented:", err));
}

function moveEmoji() {
  if (isEmojiFleeing) return;
  isEmojiFleeing = true;
  const emojiSize = emoji.getBoundingClientRect();
  const maxX = window.innerWidth - emojiSize.width;
  const maxY = window.innerHeight - emojiSize.height;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  emoji.style.left = randomX + "px";
  emoji.style.top = randomY + "px";
  emoji.style.transform = "translate(0, 0)";
  setTimeout(() => {
    isEmojiFleeing = false;
  }, 1000);
}

emoji.addEventListener("mouseover", () => {
  setNewEmoji();
});

document.addEventListener("mousemove", (e) => {
  if (throttleTimeout) return;
  throttleTimeout = setTimeout(() => {
    if (isEmojiFleeing) {
      throttleTimeout = null;
      return;
    }
    const emojiRect = emoji.getBoundingClientRect();
    const emojiCenterX = emojiRect.left + emojiRect.width / 2;
    const emojiCenterY = emojiRect.top + emojiRect.height / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - emojiCenterX, 2) +
        Math.pow(e.clientY - emojiCenterY, 2)
    );
    if (distance < 150) {
      moveEmoji();
    }
    throttleTimeout = null;
  }, 100);
});

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
    moveEmoji();
    emoji.style.opacity = "1";
    emoji.style.transform = "scale(1.1)";
    setTimeout(() => {
      emoji.style.transform = "";
    }, 150);
  }, 400);
}

emoji.addEventListener("click", (e) => {
  isEmojiFleeing = true;

  if (currentMode === "copy") {
    handleCopyMode(e);
  } else if (currentMode === "explosion") {
    handleExplosionMode(e);
  }

  setTimeout(() => {
    isEmojiFleeing = false;
  }, 1000);
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.innerText = isDark ? "☀️" : "🌙";
});

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerText = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.innerText = "🌙";
  }
}

function setupFilterListeners() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      activeCategory = e.target.dataset.category;
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      setNewEmoji();
    });
  });
}

function initializeApp() {
  loadSavedMode();
  loadSavedTheme();
  setupFilterListeners();
  loadEmojis();
}

document.addEventListener("DOMContentLoaded", initializeApp);
