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
    switch (oper) {
        case '+':
            add(num1, num2);
        case '-':
            subtract(num1, num2);
        case 'x':
            multiply(num1, num2);
        case '/':
            divide(num1, num2);
    }
}

//im gonna punch hole in wall

//populate display
