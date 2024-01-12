"use strict";
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

numberBtns.forEach((button) =>
  button.addEventListener("click", () => displayNumber(button.textContent))
);

operatorBtns.forEach((button) =>
  button.addEventListener("click", () => doOperation(button.textContent))
);

let firstNumber;
let secondNumber;
let currentOperator;

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
