"use strict";

let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let doScreenReset = false;

// Variables for Display
const currentDisplay = document.getElementById("current-display");
const prevDisplay = document.getElementById("past-operation");

// Variables for Calculation
const numberBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");

// More Variables for Calculation
const equalBtn = document.getElementById("equal");
const allClearBtn = document.getElementById("allClear");
const clearBtn = document.getElementById("clear");
const decimal = document.getElementById("decimal");

// All Event Listeners
numberBtns.forEach((button) =>
  button.addEventListener("click", () => displayNumber(button.textContent))
);

operatorBtns.forEach((button) =>
  button.addEventListener("click", () => doOperation(button.textContent))
);

equalBtn.addEventListener("click", evaluate);
allClearBtn.addEventListener("click", clearDisplay);
clearBtn.addEventListener("click", deleteNumber);
decimal.addEventListener("click", displayPoint);

// Functions for Event Listeners
function evaluate() {
  if (currentOperation === null || doScreenReset) return;
  if (currentOperation === "÷" && currentDisplay.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondNumber = currentDisplay.textContent;
  currentDisplay.textContent = roundResult(
    operate(currentOperation, firstNumber, secondNumber)
  );
  prevDisplay.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function resetScreen() {
  currentDisplay.textContent = "";
  doScreenReset = false;
}

function displayNumber(number) {
  if (currentDisplay.textContent == 0 || doScreenReset) resetScreen();
  currentDisplay.textContent += number;
}

function doOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstNumber = currentDisplay.textContent;
  currentOperation = operator;
  resetScreen();
  prevDisplay.textContent = `${firstNumber} ${currentOperation}`;
  doScreenReset = true;
}

function clearDisplay() {
  currentDisplay.textContent = "0";
  prevDisplay.textContent = "";
  firstNumber = "";
  secondNumber = "";
  currentOperation = null;
}

function deleteNumber() {
  currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0, -1);
}

function displayPoint() {
  if (doScreenReset) resetScreen();
  if (currentDisplay.textContent === "") currentDisplay.textContent = "0";
  if (currentDisplay.textContent.includes(".")) return;
  currentDisplay.textContent += ".";
}

// Addition
const sum = (a, b) => a + b;

// Subtraction
const subtract = (a, b) => a - b;

// Multiplication
const multiply = (a, b) => a * b;

// Division Function
const divide = (a, b) => a / b;

// Remainder Function
const remainder = (a, b) => a % b;

// Operate Function
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return sum(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    case "%":
      if (b === 0) return null;
      else return remainder(a, b);
    default:
      return null;
  }
}
