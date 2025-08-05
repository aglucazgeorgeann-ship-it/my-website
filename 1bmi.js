const form = document.getElementById("bmi-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight.";
    return;
  }

  const bmi = weight / (height * height);
  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  result.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong><br>Status: <strong>${status}</strong>`;
});