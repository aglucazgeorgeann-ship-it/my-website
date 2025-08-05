const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate");
const bmiValueText = document.getElementById("bmiValue");
const bmiCategoryText = document.getElementById("bmiCategory");

calculateBtn.addEventListener("click", () => {
  const height = parseFloat(heightInput.value) / 100; // convert cm to meters
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight.");
    return;
  }

  const bmi = weight / (height * height);
  bmiValueText.textContent = `Your BMI: ${bmi.toFixed(2)}`;

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  bmiCategoryText.textContent = `Category: ${category}`;
});