document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Element Selection ---
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");
  const passwordToggles = document.querySelectorAll(".password-toggle");
  const signUpForm = document.getElementById("signUpForm");
  const signInForm = document.getElementById("signInForm");

  // --- 2. Panel Animation ---
  signUpButton.addEventListener("click", () =>
    container.classList.add("right-panel-active")
  );
  signInButton.addEventListener("click", () =>
    container.classList.remove("right-panel-active")
  );

  // --- 3. Show/Hide Password ---
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const passwordInput = toggle.previousElementSibling;
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      toggle.classList.toggle("fa-eye");
      toggle.classList.toggle("fa-eye-slash");
    });
  });

  // --- 4. Form Validation ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateInput = (input, validationFn) => {
    const errorMessage = input.nextElementSibling.classList.contains(
      "password-toggle"
    )
      ? input.nextElementSibling.nextElementSibling
      : input.nextElementSibling;

    if (!validationFn(input.value.trim())) {
      errorMessage.style.visibility = "visible";
      return false;
    } else {
      errorMessage.style.visibility = "hidden";
      return true;
    }
  };

  // Validation functions
  const isNotEmpty = (value) => value !== "";
  const isValidEmail = (value) => emailRegex.test(value);
  const isLongEnough = (value) => value.length >= 8;

  // Event Listeners for Live Validation
  const nameInput = document.getElementById("signUpName");
  const signUpEmailInput = document.getElementById("signUpEmail");
  const signUpPasswordInput = document.getElementById("signUpPassword");
  const signInEmailInput = document.getElementById("signInEmail");
  const signInPasswordInput = document.getElementById("signInPassword");

  nameInput.addEventListener("input", () =>
    validateInput(nameInput, isNotEmpty)
  );
  signUpEmailInput.addEventListener("input", () =>
    validateInput(signUpEmailInput, isValidEmail)
  );
  signUpPasswordInput.addEventListener("input", () =>
    validateInput(signUpPasswordInput, isLongEnough)
  );
  signInEmailInput.addEventListener("input", () =>
    validateInput(signInEmailInput, isValidEmail)
  );
  signInPasswordInput.addEventListener("input", () =>
    validateInput(signInPasswordInput, isNotEmpty)
  );

  // Form Submission Handling
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission
    const isNameValid = validateInput(nameInput, isNotEmpty);
    const isEmailValid = validateInput(signUpEmailInput, isValidEmail);
    const isPasswordValid = validateInput(signUpPasswordInput, isLongEnough);

    if (isNameValid && isEmailValid && isPasswordValid) {
      alert("Sign Up Successful!");
      // Here you would typically send data to a server
    }
  });

  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const isEmailValid = validateInput(signInEmailInput, isValidEmail);
    const isPasswordValid = validateInput(signInPasswordInput, isNotEmpty);

    if (isEmailValid && isPasswordValid) {
      alert("Sign In Successful!");
      // Here you would typically send data to a server
    }
  });
});
