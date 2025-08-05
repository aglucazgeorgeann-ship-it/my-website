const unitType = document.getElementById("unitType");
const inputValue = document.getElementById("inputValue");
const result = document.getElementById("result");

function convert() {
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    result.textContent = "Result: --";
    return;
  }

  let output = "";

  switch (unitType.value) {
    case "length":
      output = `${value} meters = ${(value / 1000).toFixed(3)} kilometers`;
      break;
    case "temp":
      output = `${value} °C = ${((value * 9/5) + 32).toFixed(2)} °F`;
      break;
    case "weight":
      output = `${value} kg = ${(value * 2.20462).toFixed(2)} lbs`;
      break;
  }

  result.textContent = `Result: ${output}`;
}

inputValue.addEventListener("input", convert);
unitType.addEventListener("change", convert);