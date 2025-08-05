const message = document.getElementById("message");
const counter = document.getElementById("counter");
const remaining = document.getElementById("remaining");
const submitBtn = document.getElementById("submitBtn");
const count = document.getElementById("count");

const maxLength = 100;

message.addEventListener("input", () => {
  const length = message.value.length;
  const left = maxLength - length;

  count.textContent = length;
  remaining.textContent = `💬 ${left >= 0 ? left : 0} characters remaining`;

  if (length > maxLength) {
    counter.classList.add("over-limit");
    remaining.classList.add("over-limit");
    submitBtn.disabled = true;
  } else {
    counter.classList.remove("over-limit");
    remaining.classList.remove("over-limit");
    submitBtn.disabled = false;
  }
});