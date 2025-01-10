const calculator = document.querySelector("#calc-container");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
const numBtns = document.querySelectorAll(".nums");

let num_arr = Array.from(numBtns)
let num_disp = [];

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", () => {
        num_disp.push(numBtns[i]);
        display.textContent = num_disp;
        console.log(num_disp);
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

