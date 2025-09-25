const form = document.getElementById("travel-survey-form");
const surveyCard = document.getElementById("survey-card");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  surveyCard.classList.add("opacity-0", "invisible");

  setTimeout(() => {
    surveyCard.classList.add("hidden");
    successMessage.classList.remove("hidden");
    successMessage.classList.add("opacity-100", "visible");
  }, 500); // This timeout matches the transition duration

  // Optional: You can reset the form after showing the message
  // setTimeout(() => {
  //     form.reset();
  //     successMessage.classList.add('hidden');
  //     surveyCard.classList.remove('hidden', 'opacity-0', 'invisible');
  // }, 4000); // Reset after 4 seconds
});
