//const variables to edit for calculator interaction
const display = document.querySelector("#display");


//variables to hold numbers and current operator
let num1;
let num2;
let oper;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(n1,n1,op) {
    switch (op) {
        case '+':
            add(n1, n2);
        case '-':
            subtract(n1, n2);
        case 'x':
            multiply(n1, n2);
        case '/':
            divide(n1, n2);
    }
}

//im gonna punch hole in wall

//populate display
function populateDisplay() {
    const nums = document.querySelectorAll(".nums");

    for (let i = 0; i < nums.length; i++) {
        nums[i].addEventListener("click", function() {
            
        });
    }
}