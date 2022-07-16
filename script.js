const screen = document.getElementById("screen");

function add(val1, val2) {
  return val1 + val2;
}

function subtract(val1, val2) {
  return val1 - val2;
}

function multiply(val1, val2) {
  return val1 * val2;
}

function divide(val1, val2) {
  return val1 / val2;
}

function operate(operator, val1, val2) {
  return operator(val1, val2);
}

function modulo(val1, val2) {
  return val1 % val2;
}

let numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (screen.textContent == 0) screen.textContent = "";
    screen.textContent += button.textContent;
  });
});

let operatorButtons = document.querySelectorAll(".operator");
let val1;
let operator;
let operationGoingOn = false;

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operationGoingOn) {
      val1 = operate(operator, val1, +screen.textContent);
    } else {
      val1 = +screen.textContent;
    }
    operator = symbolToOperator(button.textContent);
    screen.textContent = "";
    operationGoingOn = true;
  });
});

document.getElementById("equals").addEventListener("click", () => {
  if (screen.textContent != null) {
    screen.textContent = operate(operator, val1, +screen.textContent);
    operationGoingOn = false;
  }
});

function symbolToOperator(symbol) {
  switch (symbol) {
    case "+":
      return add;
    case "-":
      return subtract;
    case "x":
      return multiply;
    case "/":
      return divide;
    case "%":
      return modulo;
  }
}

document.getElementById("clear").addEventListener("click", () => {
  screen.textContent = "";
});

document.getElementById("inverter").addEventListener("click", () => {
  screen.textContent = multiply(+screen.textContent, -1);
});
