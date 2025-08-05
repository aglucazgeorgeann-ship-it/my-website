const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const resultDiv = document.getElementById("result");

addBtn.addEventListener("click", () => {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);
  const sum = n1 + n2;

  resultDiv.textContent = `Result: ${sum}`;
});

subtractBtn.addEventListener("click", () => {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);
  const diff = n1 - n2;

  resultDiv.textContent = `Result: ${diff}`;
});