document.addEventListener("DOMContentLoaded", () => {
  const controlButtons = document.querySelectorAll(".controls button");
  const mainGallery = document.getElementById("gallery-container-main");
  const polygonGallery = document.getElementById("gallery-container-polygon");

  const allMainEffects = [
    "effect-zoom",
    "effect-slide",
    "effect-grayscale",
    "effect-blur",
    "effect-rotate",
    "effect-shine",
    "effect-border",
    "effect-circle",
  ];

  function applyEffect(effectName) {
    // Logic to show/hide galleries
    if (effectName === "polygon") {
      mainGallery.classList.add("hidden");
      polygonGallery.classList.remove("hidden");
    } else {
      polygonGallery.classList.add("hidden");
      mainGallery.classList.remove("hidden");

      // Apply effect class to main gallery
      allMainEffects.forEach((effect) => mainGallery.classList.remove(effect));
      mainGallery.classList.add(`effect-${effectName}`);
    }

    // Update active state on buttons
    controlButtons.forEach((button) => {
      if (button.dataset.effect === effectName) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  controlButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const effectName = button.dataset.effect;
      applyEffect(effectName);
    });
  });

  // Set a default effect on page load
  applyEffect("zoom");
});
