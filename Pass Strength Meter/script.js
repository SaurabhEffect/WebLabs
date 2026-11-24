document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("toggle-password");
  const copyPassword = document.getElementById("copy-password");
  const toggleTheme = document.getElementById("toggle-theme");
  const checkBreach = document.getElementById("check-breach");
  const container = document.querySelector(".password-strength-container");

  const strengthText = document.getElementById("strength-text");
  const strengthScore = document.getElementById("strength-score");
  const timeToCrackEl = document.getElementById("time-to-crack");
  const suggestionsEl = document.getElementById("suggestions");
  const breachStatus = document.getElementById("breach-status");
  const strengthFill = document.getElementById("strength-fill");

  const reqs = {
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    lowercase: document.getElementById("lowercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special"),
  };

  const generatorModal = document.getElementById("generator-modal");
  const openGenerateOptions = document.getElementById("open-generate-options");
  const closeModal = document.getElementById("close-modal");
  const lengthSlider = document.getElementById("length-slider");
  const lengthValue = document.getElementById("length-value");
  const includeUppercase = document.getElementById("include-uppercase");
  const includeNumbers = document.getElementById("include-numbers");
  const includeSpecial = document.getElementById("include-special");
  const generatePasswordFromModal = document.getElementById(
    "generate-password-from-modal"
  );

  toggleTheme?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleTheme.querySelector("i").className = isDark
      ? "fas fa-sun"
      : "fas fa-moon";
  });

  togglePassword?.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    togglePassword.querySelector("i").className = `fas fa-eye${
      isHidden ? "-slash" : ""
    }`;
  });

  copyPassword?.addEventListener("click", async () => {
    if (!passwordInput.value) return;
    try {
      await navigator.clipboard.writeText(passwordInput.value);
      const originalIcon = copyPassword.innerHTML;
      copyPassword.innerHTML = '<i class="fas fa-check"></i>';
      copyPassword.title = "Copied!";
      setTimeout(() => {
        copyPassword.innerHTML = originalIcon;
        copyPassword.title = "Copy password";
      }, 2000);
    } catch {
      alert("Clipboard access is not available in your browser.");
    }
  });

  checkBreach?.addEventListener("click", checkPwnedPassword);
  passwordInput?.addEventListener("input", updateStrength);

  openGenerateOptions?.addEventListener(
    "click",
    () => (generatorModal.hidden = false)
  );
  closeModal?.addEventListener("click", () => (generatorModal.hidden = true));
  lengthSlider?.addEventListener(
    "input",
    (e) => (lengthValue.textContent = e.target.value)
  );

  generatePasswordFromModal?.addEventListener("click", () => {
    const pass = generateStrongPassword({
      length: lengthSlider.value,
      uppercase: includeUppercase.checked,
      numbers: includeNumbers.checked,
      special: includeSpecial.checked,
    });
    passwordInput.value = pass;
    updateStrength();
    generatorModal.hidden = true;
  });

  function updateStrength() {
    const password = passwordInput.value;
    const results = checkPasswordStrength(password);

    for (const key in reqs) {
      updateRequirement(reqs[key], results.requirements[key]);
    }

    const { strengthClass, strengthText: text } = getStrengthLevel(
      results.score
    );
    container.className = `password-strength-container ${strengthClass}`;
    strengthText.textContent = text;
    strengthScore.textContent = `${results.score}/100`;
    strengthFill.style.width = `${results.score}%`;

    suggestionsEl.textContent =
      results.suggestions.join(" ") || "Excellent password!";
    timeToCrackEl.textContent = calculateTimeToCrack(password);
  }

  function checkPasswordStrength(password) {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    };

    let score = 0;
    if (requirements.length) score += 25;
    if (requirements.uppercase) score += 20;
    if (requirements.lowercase) score += 5;
    if (requirements.number) score += 20;
    if (requirements.special) score += 30;
    if (password.length > 12) score += 10;

    if (/^[0-9]+$/.test(password) || /^[a-zA-Z]+$/.test(password)) {
      score -= 20;
    }

    const suggestions = [];
    if (!requirements.length) suggestions.push("Make it longer.");
    if (!requirements.uppercase) suggestions.push("Add uppercase letters.");
    if (!requirements.number) suggestions.push("Include numbers.");
    if (!requirements.special) suggestions.push("Use special characters.");

    return {
      score: Math.max(0, Math.min(100, score)),
      requirements,
      suggestions,
    };
  }

  function getStrengthLevel(score) {
    if (score === 0)
      return { strengthClass: "", strengthText: "Enter a password" };
    if (score < 25)
      return { strengthClass: "strength-very-weak", strengthText: "Very Weak" };
    if (score < 50)
      return { strengthClass: "strength-weak", strengthText: "Weak" };
    if (score < 75)
      return { strengthClass: "strength-medium", strengthText: "Medium" };
    if (score < 90)
      return { strengthClass: "strength-strong", strengthText: "Strong" };
    return {
      strengthClass: "strength-very-strong",
      strengthText: "Very Strong",
    };
  }

  function updateRequirement(el, valid) {
    const icon = el.querySelector("i");
    el.classList.toggle("valid", valid);
    icon.className = valid ? "fas fa-check-circle" : "fas fa-times-circle";
  }

  function calculateTimeToCrack(password) {
    if (!password) return "";
    let charset = 0;
    if (/[a-z]/.test(password)) charset += 26;
    if (/[A-Z]/.test(password)) charset += 26;
    if (/[0-9]/.test(password)) charset += 10;
    if (/[^A-Za-z0-9]/.test(password)) charset += 32;

    const combinations = Math.pow(charset, password.length);
    const cracksPerSecond = 1e9;
    const seconds = combinations / cracksPerSecond;

    if (seconds < 60) return "Instant";
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
    if (seconds < 2.628e6) return `${Math.round(seconds / 86400)} days`;
    if (seconds < 3.154e7) return `${Math.round(seconds / 2.628e6)} months`;
    if (seconds < 3.154e10) return `${Math.round(seconds / 3.154e7)} years`;
    return "Centuries";
  }

  function generateStrongPassword(options) {
    const { length, uppercase, numbers, special } = options;
    const charSets = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      special: "!@#$%^&*()_+{}|:<>?-=[];,./",
    };

    let availableChars = charSets.lowercase;
    if (uppercase) availableChars += charSets.uppercase;
    if (numbers) availableChars += charSets.numbers;
    if (special) availableChars += charSets.special;

    if (!availableChars) return "Select options";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += availableChars[Math.floor(Math.random() * availableChars.length)];
    }
    return pass;
  }

  async function checkPwnedPassword() {
    const password = passwordInput.value;
    if (!password) {
      breachStatus.textContent = "Please enter a password first.";
      return;
    }

    breachStatus.textContent = "Checking...";
    breachStatus.style.color = "";

    try {
      const hash = CryptoJS.SHA1(password)
        .toString(CryptoJS.enc.Hex)
        .toUpperCase();
      const prefix = hash.substring(0, 5);
      const suffix = hash.substring(5);

      const response = await fetch(
        `https://api.pwnedpasswords.com/range/${prefix}`
      );
      if (!response.ok) throw new Error("Network error");

      const text = await response.text();
      const hashes = text.split("\r\n").map((line) => line.split(":"));
      const pwned = hashes.find(([h, count]) => h === suffix);

      if (pwned) {
        const count = parseInt(pwned[1], 10).toLocaleString();
        breachStatus.textContent = `⚠️ Pwned! Found in ${count} breaches.`;
        breachStatus.style.color = "#e74c3c";
      } else {
        breachStatus.textContent = "✅ All clear! Not found in breaches.";
        breachStatus.style.color = "#27ae60";
      }
    } catch (error) {
      breachStatus.textContent = "Could not check breach status.";
      breachStatus.style.color = "#e67e22";
    }
  }
});
