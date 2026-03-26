const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector(".counter__button--decrease");
const counterValue = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-button");
const counterTitle = document.querySelector(".counter__title");

const LIMIT = 5;
let limitReached = false;


function animate() {
  counterValue.style.transform = "scale(1.2)";
  setTimeout(() => {
    counterValue.style.transform = "scale(1)";
  }, 100);
}


function applyLimit() {
  limitReached = true;
  counterValue.classList.add("fade", "limit-color");
  counterTitle.textContent = "Reached Limit !!";
  counterTitle.classList.add("fade");
  increaseButton.classList.add("fade");
  decreaseButton.classList.add("fade");
  resetButton.classList.add("fade");
}


function removeLimit() {
  limitReached= false;
  counterValue.classList.remove("fade", "limit-color");
  counterTitle.textContent = "Fancy Counter";
  counterTitle.classList.remove("fade");
  increaseButton.classList.remove("fade");
  decreaseButton.classList.remove("fade");
  resetButton.classList.remove("fade");
}


increaseButton.addEventListener("click", function () {
  const currentValue = +counterValue.textContent;

  if (currentValue >= LIMIT) return; 

  const newValue = currentValue + 1;
  counterValue.textContent = newValue;
  animate();

  if (newValue === LIMIT && !limitReached) {
    applyLimit();
  }
});


decreaseButton.addEventListener("click", function () {
  const currentValue = +counterValue.textContent;
  const newValue = currentValue - 1;
  counterValue.textContent = newValue;
  animate();

  
  if (newValue < LIMIT && limitReached) {
    removeLimit();
  }
});


resetButton.addEventListener("click", function () {
  counterValue.textContent = 0;
  removeLimit();
  animate();
});