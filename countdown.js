const minutesInput = document.getElementById("minutesInput");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const timerDisplay = document.getElementById("timerDisplay");
const message = document.getElementById("message");

let countdownInterval;
let timeLeft = 0;
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timerDisplay.textContent = 
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startCountdown() {
  if (isRunning) return;

  const inputMinutes = parseInt(minutesInput.value);
  if (isNaN(inputMinutes) || inputMinutes <= 0) {
    message.textContent = "⛔ Please enter a valid number of minutes.";
    return;
  }

  timeLeft = inputMinutes * 60;
  isRunning = true;
  message.textContent = "";

  updateDisplay();

  countdownInterval = setInterval(() => {
    timeLeft--;

    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      isRunning = false;
      message.textContent = "⏰ Time's up!";
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
  isRunning = false;
}

function resetCountdown() {
  clearInterval(countdownInterval);
  isRunning = false;
  timeLeft = 0;
  timerDisplay.textContent = "00:00";
  message.textContent = "";
  minutesInput.value = "";
}

startBtn.addEventListener("click", startCountdown);
stopBtn.addEventListener("click", stopCountdown);
resetBtn.addEventListener("click", resetCountdown);