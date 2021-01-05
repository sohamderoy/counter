const value = document.getElementById("value");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

increase.addEventListener("click", () => {
    value.textContent = parseInt(value.textContent) + 1;
})
decrease.addEventListener("click", () => {
    value.textContent = parseInt(value.textContent) - 1;
})
reset.addEventListener("click", () => {
    value.textContent = 0;
})