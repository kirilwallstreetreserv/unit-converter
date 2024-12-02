const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

const inputEl = document.getElementById("input");
const btnConvert = document.getElementById("convert");
const outputLength = document.getElementById("resultLength");
const outputVolume = document.getElementById("resultVolume");
const outputMass = document.getElementById("resultMass");

btnConvert.addEventListener("click", function() {
    // Get the input value when the button is clicked
    let input = inputEl.value;

    calcLength(input);
    calcVolume(input);
    calcMass(input);
});

function calcLength(input) {
    let resLength = input * meter;
    let resLengthRev = input / meter;
    outputLength.textContent = `${input} meters = ${resLength.toFixed(2)} feet || ${input} feet = ${resLengthRev.toFixed(2)} meters`;
}

function calcVolume(input) {
    let resVolume = input * liter;
    let resVolumeRev = input / liter;
    outputVolume.textContent = `${input} liters = ${resVolume.toFixed(2)} gallons || ${input} gallons = ${resVolumeRev.toFixed(2)} liters`;
}

function calcMass(input) {
    let resMass = input * kilogram;
    let resMassRev = input / kilogram;
    outputMass.textContent = `${input} kilograms = ${resMass.toFixed(2)} pounds || ${input} pounds = ${resMassRev.toFixed(2)} kilograms`;
}