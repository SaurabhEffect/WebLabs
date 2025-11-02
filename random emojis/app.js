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

emoji.addEventListener("click", setNewEmoji);

setNewEmoji();
