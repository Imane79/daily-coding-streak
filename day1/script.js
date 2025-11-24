// script.js

const passwordInput = document.getElementById("password");
const resultDiv = document.getElementById("result");
// const checkBtn = document.getElementById("checkBtn");

function getPasswordStrength(password) {
  let score = 0;

  // length rules
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;

  // character type rules (booleans)
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  if (hasLower) score++;
  if (hasUpper) score++;
  if (hasDigit) score++;
  if (hasSymbol) score++;

  // map score to label + color
  let label = "Very Weak";
  let color = "red";

  if (score <= 1) {
    label = "Very Weak";
    color = "red";
  } else if (score <= 3) {
    label = "Weak";
    color = "orange";
  } else if (score <= 5) {
    label = "Medium";
    color = "gold";
  } else {
    label = "Strong";
    color = "green";
  }

  return { label, color };
}

function checkPassword() {
  const pwd = passwordInput.value;

  if (!pwd) {
    resultDiv.textContent = "";
    return;
  }

  const { label, color } = getPasswordStrength(pwd);
  resultDiv.textContent = `Strength: ${label}`;
  resultDiv.style.color = color;
}

// Check when clicking the button
checkBtn.addEventListener("click", checkPassword);

// Real-time check while typing
passwordInput.addEventListener("input", checkPassword);
