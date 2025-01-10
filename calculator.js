const calculator = document.querySelector("#calc-container");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
const numBtns = document.querySelectorAll(".num");
const clear = document.querySelector("#clear");

numBtns.innerText

//num_arr = Array.from(numBtns.innerText);

console.log(numBtns[0].textContent);
num_disp = [];

if (num_disp) {
    for (let i = 0; i < numBtns.length; i++) {
        numBtns[i].addEventListener("click", () => {
            num_disp.push(numBtns[i].innerText);
            num = num_disp.join('');
            display.textContent = num;
            console.log(num_disp);
        });
    }
}

clear.addEventListener("click", () => {
    display.textContent = '';
    num_disp = [];
});
    


let operators = {
    add: function (a, b) {return a + b},
    subtract: function (a, b) {return a - b},
    multiply: function (a, b) {return a * b},
    divide: function (a, b) {return a / b},
    exponent: function (a, b) {return a ** b},
    sqrt: function (a) {return a ** (1/2)},
}

