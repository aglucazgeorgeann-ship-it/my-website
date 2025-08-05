const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  const strength = getPasswordStrength(value);

  strengthText.textContent = "Strength: " + strength.label;
  strengthBar.style.background = strength.color;
});

function getPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[\W]/.test(password)) strength++;

  if (strength === 0) return { label: "--", color: "#ddd" };
  if (strength <= 1) return { label: "Weak", color: "red" };
  if (strength === 2) return { label: "Medium", color: "orange" };
  return { label: "Strong", color: "green" };
}