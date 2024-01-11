"use strict";

// Addition Function
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// Subtraction Function
function subtract(...args) {
  if (args.length === 0) {
    return 0;
  }
  let result = args[0];
  for (let i = 1; i < args.length; i++) {
    result -= args[i];
  }
  return result;
}

// Multiplication Function
function multiply(...args) {
  if (args.length === 0) {
    return 0;
  }
  let result = args[0];
  for (let i = 1; i < args.length; i++) {
    result *= args[i];
  }
  return result;
}

// Division Function
function divide(...args) {
  if (args.length === 0) {
    return 0;
  }
  let result = args[0];
  for (let i = 1; i < args.length; i++) {
    result /= args[i];
  }
  return result;
}
