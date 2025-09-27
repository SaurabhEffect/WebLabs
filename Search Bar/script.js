const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");
searchBarContainerEl.addEventListener("click", function () {
  searchBarContainerEl.classList.toggle("active");
});
