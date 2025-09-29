const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

function switchTheme(isDark) {
  if (isDark) {
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggle.checked = true;
  } else {
    htmlElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggle.checked = false;
  }
}

themeToggle.addEventListener("change", () => {
  switchTheme(themeToggle.checked);
});

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  switchTheme(savedTheme === "dark");
} else {
  switchTheme(prefersDarkScheme.matches);
}

prefersDarkScheme.addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    switchTheme(e.matches);
  }
});
