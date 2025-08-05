const datePicker = document.getElementById("datePicker");
const startBtn = document.getElementById("startBtn");
const countdown = document.getElementById("countdown");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let countdownInterval;

startBtn.addEventListener("click", () => {
  const selectedDate = new Date(datePicker.value);

  if (!datePicker.value || selectedDate <= new Date()) {
    alert("Please select a future date!");
    return;
  }

  countdown.classList.remove("hidden");

  if (countdownInterval) clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date();
    const distance = selectedDate - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = "0";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }, 1000);
});