let inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const meterFootDisplay = document.getElementById("meter-foot-display");
const literGallonDisplay = document.getElementById("liter-gallon-display");
const kilogramPoundDisplay = document.getElementById("kilogram-pound-display");
const alertMsg = document.getElementById("alert-msg");

convertBtn.addEventListener("click", function () {
  let meterSum = inputEl.value * 0.3048;
  let footSum = inputEl.value * 3.280839895;
  let literSum = inputEl.value * 0.2641721769;
  let gallonSum = inputEl.value * 3.78541;
  let kilogramSum = inputEl.value * 2.2046244202;
  let poundSum = inputEl.value * 0.453592;

  if (inputEl.value > 1) {
    // Render Meter / Foot greater than 1
    meterFootDisplay.innerHTML = `
  <h2>Length (Meter/Feet)</h2>
    <p class="display-convert-value">
        ${inputEl.value} meters = ${meterSum.toFixed(3)} feet | ${
      inputEl.value
    } feet = ${footSum.toFixed(3)} meters
    </p>
  `;

    // Render Liter / Gallon greater than 1
    literGallonDisplay.innerHTML = `
  <h2>Volume (Liters/Gallons)</h2>
    <p class="display-convert-value">
        ${inputEl.value} liters = ${literSum.toFixed(3)} gallons | ${
      inputEl.value
    } gallons = ${gallonSum.toFixed(3)} liters
    </p>
  `;

    // Render Kilogram / Pound greater than 1
    kilogramPoundDisplay.innerHTML = `
  <h2>Mass (Kilograms/Pounds)</h2>
  <p class="display-convert-value">
            ${inputEl.value} kilograms = ${kilogramSum.toFixed(3)} pounds | ${
      inputEl.value
    } pounds = ${poundSum.toFixed(3)} kilograms
  </p>
  `;
  } else if (inputEl.value == 1) {
    // Render Meter / Foot greater equal to 1
    meterFootDisplay.innerHTML = `
  <h2>Length (Meter/Feet)</h2>
    <p class="display-convert-value">
        ${inputEl.value} meter = ${meterSum.toFixed(3)} foot | ${
      inputEl.value
    } foot = ${footSum.toFixed(3)} meters
    </p>
  `;

    // Render Liter / Gallon greater equal to 1
    literGallonDisplay.innerHTML = `
  <h2>Volume (Liters/Gallons)</h2>
    <p class="display-convert-value">
        ${inputEl.value} liter = ${literSum.toFixed(3)} gallon | ${
      inputEl.value
    } gallon = ${gallonSum.toFixed(3)} liters
    </p>
  `;

    // Render Kilogram / Pound greater equal to 1
    kilogramPoundDisplay.innerHTML = `
  <h2>Mass (Kilograms/Pounds)</h2>
  <p class="display-convert-value">
            ${inputEl.value} kilogram = ${kilogramSum.toFixed(3)} pounds | ${
      inputEl.value
    } pound = ${poundSum.toFixed(3)} kilogram
  </p>
  `;
  }
});
