const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  const key = event.key === " " ? "Space" : event.key;
  const keyCode = event.keyCode;
  const code = event.code;

  insert.innerHTML = `
    <div class="key main-key active">
      ${key}
      <small>event.key</small>
      <button class="copy-btn" data-clipboard="${key}" title="Copy">
        <i class="fas fa-copy"></i>
      </button>
      <span class="tooltip">Copied!</span>
    </div>

    <div class="key active">
      ${keyCode}
      <small>event.keyCode</small>
      <button class="copy-btn" data-clipboard="${keyCode}" title="Copy">
        <i class="fas fa-copy"></i>
      </button>
      <span class="tooltip">Copied!</span>
    </div>

    <div class="key active">
      ${code}
      <small>event.code</small>
      <button class="copy-btn" data-clipboard="${code}" title="Copy">
        <i class="fas fa-copy"></i>
      </button>
      <span class="tooltip">Copied!</span>
    </div>
  `;

  document.querySelectorAll(".key.active").forEach((keyEl) => {
    setTimeout(() => keyEl.classList.remove("active"), 200);
  });
  addCopyListeners();
});

function addCopyListeners() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const textToCopy = e.currentTarget.getAttribute("data-clipboard");
      const tooltip = e.currentTarget.nextElementSibling;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          tooltip.classList.add("show");
          setTimeout(() => {
            tooltip.classList.remove("show");
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          tooltip.textContent = "Failed!";
          tooltip.style.backgroundColor = "#f44336";
          tooltip.classList.add("show");
          setTimeout(() => {
            tooltip.classList.remove("show");
            tooltip.textContent = "Copied!";
            tooltip.style.backgroundColor = "#4caf50";
          }, 2000);
        });
    });
  });
}
