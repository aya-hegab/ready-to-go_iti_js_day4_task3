var input = document.querySelector("input");
var cRed = document.getElementById("red");
var cYellow = document.getElementById("yellow");
var cGreen = document.getElementById("green");
var all = document.querySelectorAll(".c");

function changeColor() {
  cRed.classList.remove("c-red");
  cYellow.classList.remove("c-yellow");
  cGreen.classList.remove("c-green");

  if (input.value == 1) {
    cRed.classList.add("c-red");
  } else if (input.value == 2) {
    cYellow.classList.add("c-yellow");
  } else if (input.value == 3) {
    cGreen.classList.add("c-green");
  }
  console.log(cRed);
}
