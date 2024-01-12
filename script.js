"use strict";
const display = document.getElementById("display");

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
