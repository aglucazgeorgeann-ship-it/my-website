const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

let valid = {
  username: false,
  email: false,
  password: false,
};

function checkFormValid() {
  submitBtn.disabled = !(valid.username && valid.email && valid.password);
}

username.addEventListener("input", () => {
  if (username.value.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters.";
    valid.username = false;
  } else {
    usernameError.textContent = "";
    valid.username = true;
  }
  checkFormValid();
});

email.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.textContent = "Invalid email address.";
    valid.email = false;
  } else {
    emailError.textContent = "";
    valid.email = true;
  }
  checkFormValid();
});

password.addEventListener("input", () => {
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid.password = false;
  } else {
    passwordError.textContent = "";
    valid.password = true;
  }
  checkFormValid();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});