const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const goBackBtn = document.querySelector("#go-back");
const feedbackResult = document.querySelector("#feedback-result");

let selectedRating = "Satisfied";
ratingsContainer.addEventListener("click", (e) => {
  const clickedRating = e.target.closest(".rating");

  if (clickedRating) {
    removeActive();
    clickedRating.classList.add("active");
    selectedRating = clickedRating.querySelector("small").innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  feedbackResult.innerHTML = selectedRating;
  panel.classList.add("feedback-sent");
});

goBackBtn.addEventListener("click", () => {
  panel.classList.remove("feedback-sent");
  removeActive();
  ratings.forEach((rating) => {
    if (rating.querySelector("small").innerHTML === "Satisfied") {
      rating.classList.add("active");
      selectedRating = "Satisfied";
    }
  });
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
