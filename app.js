// Selectors
let num = 0;
const number = document.querySelector(".number");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

// EventListeners
decrease.addEventListener("click", decreaseNum);
reset.addEventListener("click", resetNum);
increase.addEventListener("click", increaseNum);

// Functions
function increaseNum() {
  num++;
  number.textContent = num;
}

function resetNum() {
  num = 0;
  number.textContent = num;
}

function decreaseNum() {
  num--;
  number.textContent = num;
}
