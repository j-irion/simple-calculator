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
    if (equated) screen.textContent = "";
    screen.textContent += button.textContent;
    equated = false;
  });
});

let operatorButtons = document.querySelectorAll(".operator");
let val1;
let operator;
let operationGoingOn = false;
let equated = true;

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operationGoingOn) {
      val1 = operate(operator, val1, +screen.textContent);
    } else {
      val1 = +screen.textContent;
    }
    operator = symbolToOperator(button.textContent);
    equated = true;
    operationGoingOn = true;
  });
});

document.getElementById("equals").addEventListener("click", () => {
  if (operator == divide && +screen.textContent == 0)
    screen.textContent = "ERROR";
  else if (screen.textContent.length >= 1 && operator != null) {
    console.log("test");
    screen.textContent = round(operate(operator, val1, +screen.textContent), 5);
    operationGoingOn = false;
    equated = true;
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
  screen.textContent = "0";
  operationGoingOn = false;
  equated = true;
  val1 = null;
});

document.getElementById("inverter").addEventListener("click", () => {
  screen.textContent = multiply(+screen.textContent, -1);
});

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

document.getElementById("dot").addEventListener("click", () => {
  if (equated) screen.textContent = "0";
  if (screen.textContent.includes(".")) return;
  screen.textContent += ".";
  equated = false;
});

document.getElementById("Backspace").addEventListener("click", () => {
  if (screen.textContent.length <= 1) {
    screen.textContent = "0";
    equated = true;
  } else screen.textContent = screen.textContent.toString().slice(0, -1);
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
  let id = event.key;
  console.log(id);
  switch (event.key) {
    case "c":
      id = "clear";
      break;
    case ".":
      id = "dot";
      break;
    case "=":
      id = "equals";
      break;
    case "Enter":
      id = "equals";
  }
  document.getElementById(id).click();
});
