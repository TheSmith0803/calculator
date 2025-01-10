const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

for (let i = 0; buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let num = buttons[i].textContent;

        display.textContent = num; 
    });
}

let operators = {
    add: function (a, b) {return a + b},
    subtract: function (a, b) {return a - b},
    multiply: function (a, b) {return a * b},
    divide: function (a, b) {return a / b},
    exponent: function (a, b) {return a ** b},
    sqrt: function (a) {return a ** (1/2)},
}

