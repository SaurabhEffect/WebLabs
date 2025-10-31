const emoji = document.querySelector("#emoji");

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
];

function setNewEmoji() {
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
}

emoji.addEventListener("mouseover", () => {
  setNewEmoji();
});

setNewEmoji();
