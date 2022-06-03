let counterValue = 0;
const spanElement = document.querySelector("#value");
const incrementBtnElement = document.querySelector('[data-action="increment"]');
const decrementBtnElement = document.querySelector('[data-action="decrement"]');

const clickIncrementBtnHandler = () => {
  counterValue += 1;
  spanElement.textContent = counterValue;
};

const clickDecrementBtnHandler = () => {
  counterValue -= 1;
  spanElement.textContent = counterValue;
};

incrementBtnElement.addEventListener("click", clickIncrementBtnHandler);
decrementBtnElement.addEventListener("click", clickDecrementBtnHandler);
