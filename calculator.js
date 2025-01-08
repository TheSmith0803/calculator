const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

for (let i = 0; buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let num = buttons[i].textContent;

        display.textContent = num; 
    });
}