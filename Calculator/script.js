let target = document.querySelector(".screen");
let keys = document.querySelectorAll(".key button");

let num1 = [];
let num2 = [];
let operator = null;
let isSecondNumber = false;

// Map display symbols to real JS operators
const operatorMap = {
  "+": "+",
  "−": "-",
  "×": "*",
  "÷": "/",
  "%": "%"
};

keys.forEach(button => {
  button.addEventListener("click", function () {
    let value = button.textContent.trim();

    // CLEAR
    if (value === "C") {
      num1.length = 0;
      num2.length = 0;
      operator = null;
      isSecondNumber = false;
      target.textContent = 0;
      return;
    }

    if (operatorMap[value]) {
      if (num1.length === 0) return;

      if (value === "%") {
        let result = calculator(num1, [], "%");
        target.textContent = result;

        num1 = String(result).split("");
        num2.length = 0;
        operator = null;
        isSecondNumber = false;
        return;
      }

      operator = operatorMap[value];
      isSecondNumber = true;
      target.textContent = value;
      return;
    }

    if (value === "=") {
      if (num1.length === 0 || num2.length === 0 || !operator) return;

      let result = calculator(num1, num2, operator);
      target.textContent = result;

      num1 = String(result).split("");
      num2.length = 0;
      operator = null;
      isSecondNumber = false;
      return;
    }

    if (!isSecondNumber) {
      num1.push(value);
      target.textContent = num1.join("");
    } else {
      num2.push(value);
      target.textContent = num2.join("");
    }
  });
});

function calculator(arr1, arr2, operator) {
  let n1 = Number(arr1.join(""));
  let n2 = Number(arr2.join(""));

  switch (operator) {
    case "+": 
      return n1 + n2;
    case "-": 
      return n1 - n2;
    case "*": 
      return n1 * n2;
    case "/": 
      return n2 === 0 ? "Error" : n1 / n2;
    case "%": 
      return n1 / 100;
    default: 
      return 0;
  }
}
