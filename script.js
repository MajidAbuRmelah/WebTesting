let colors = ["#f1c40f", "#1abc9c", "#e74c3c", "#8e44ad"];
let boxElement = document.getElementById("box");
let changeColorElement = document.getElementById("changeColor");
let i = 0;

changeColorElement.addEventListener("click", changeColor);
changeColor();

function changeColor(e) {
    if (i > colors.length - 1) {
        i = 0;
    }
    boxElement.style.backgroundColor = colors[i++];
}