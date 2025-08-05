const conversionType = document.getElementById("conversionType");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const inputValue = document.getElementById("inputValue");
const convertBtn = document.getElementById("convertBtn");
const output = document.getElementById("output");

const units = {
  length: ["Meters", "Kilometers", "Miles", "Feet"],
  weight: ["Grams", "Kilograms", "Pounds", "Ounces"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"]
};

// Populate unit options based on type
function populateUnits(type) {
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  units[type].forEach(unit => {
    const option1 = document.createElement("option");
    option1.value = unit;
    option1.textContent = unit;

    const option2 = option1.cloneNode(true);

    fromUnit.appendChild(option1);
    toUnit.appendChild(option2);
  });
}

conversionType.addEventListener("change", () => {
  populateUnits(conversionType.value);
});

populateUnits(conversionType.value); // Initial

convertBtn.addEventListener("click", () => {
  const type = conversionType.value;
  const from = fromUnit.value;
  const to = toUnit.value;
  const value = parseFloat(inputValue.value);

  if (isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  let result = convert(type, from, to, value);
  output.textContent = `Result: ${result}`;
});

function convert(type, from, to, value) {
  if (type === "length") {
    const meterValues = {
      Meters: 1,
      Kilometers: 1000,
      Miles: 1609.34,
      Feet: 0.3048
    };
    return (value * meterValues[from] / meterValues[to]).toFixed(4);

  } else if (type === "weight") {
    const gramValues = {
      Grams: 1,
      Kilograms: 1000,
      Pounds: 453.592,
      Ounces: 28.3495
    };
    return (value * gramValues[from] / gramValues[to]).toFixed(4);

  } else if (type === "temperature") {
    let result = 0;

    // Convert from -> Celsius
    if (from === "Fahrenheit") value = (value - 32) * 5 / 9;
    else if (from === "Kelvin") value = value - 273.15;

    // Convert Celsius -> to
    if (to === "Fahrenheit") result = (value * 9 / 5) + 32;
    else if (to === "Kelvin") result = value + 273.15;
    else result = value;

    return result.toFixed(2);
  }

  return "Invalid conversion.";
}
