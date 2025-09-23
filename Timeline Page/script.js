const toggleSwitch = document.querySelector("#theme-toggle");

// Theme switch function
function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

// --- SCROLL ANIMATION LOGIC ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Stop observing the element once it is visible
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1, // Animate when 10% of the element is visible
  }
);

const timelineItems = document.querySelectorAll(".timeline-item");
// Observe each timeline item
timelineItems.forEach((item) => {
  observer.observe(item);
});
