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

let numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (screen.textContent == 0) screen.textContent = "";
    screen.textContent += button.textContent;
  });
});
