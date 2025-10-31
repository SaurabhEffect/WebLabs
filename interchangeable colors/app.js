const btns = document.querySelectorAll(".btn");
const body = document.body;
const title = document.querySelector(".title");
const randomBtn = document.querySelector(".btn-random");

let currentColor = "";
const colors = ["purple", "blue", "red", "green", "yellow", "teal"];

const elegantMessages = {
  purple: "Royal Amethyst",
  blue: "Deep Sapphire",
  red: "Rich Ruby",
  green: "Emerald Isle",
  yellow: "Liquid Gold",
  teal: "Classic Teal",
};

btns.forEach((btn) => {
  if (!btn.classList.contains("btn-random")) {
    btn.addEventListener("click", () => {
      let color = btn.value;
      changeBackground(color);
    });
  }
});

randomBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  changeBackground(randomColor);
});

function changeBackground(color) {
  if (currentColor !== "") {
    body.classList.remove(currentColor);
  }
  body.classList.add(color);
  currentColor = color;
  title.textContent = elegantMessages[color];
  title.style.transform = "scale(1.1)";
  setTimeout(() => {
    title.style.transform = "scale(1)";
  }, 200);
}
