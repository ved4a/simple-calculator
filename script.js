"use strict";

let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let shouldResetScreen = false;

// Variables for Display
const currentDisplay = document.getElementById("current-display");
const prevDisplay = document.getElementById("past-operation");

// Variables for Calculation
const numberBtns = document.querySelectorAll("[allDigits]");
const operatorBtns = document.querySelectorAll("[allOperators]");

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
  if (currentOperation === null || shouldResetScreen) return;
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
  shouldResetScreen = false;
}

function displayNumber(number) {
  if (currentDisplay.textContent == 0 || doScreenReset) resetScreen();
  currentDisplay.textContent += number;
}

function doOperation(operator) {
  if (currentOperation !== false) evaluate();
  firstNumber = currentDisplay.textContent;
  currentOperation = operator;
  prevDisplay.textContent = `${firstNumber} ${currentOperation}`;
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
  if (shouldResetScreen) resetScreen();
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

// Operate Function
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
