const passwordInput = document.getElementById("password");
const strengthDisplay = document.getElementById("strength");

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  let strength = "";
  let color = "";

  if (pwd.length < 6) {
    strength = "Weak";
    color = "red";
  } else if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/) && pwd.match(/\d/)) {
    strength = "Strong";
    color = "green";
  } else {
    strength = "Medium";
    color = "orange";
  }

  strengthDisplay.textContent = `Strength: ${strength}`;
  strengthDisplay.style.color = color;
});