function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
const colorValueSpan = document.querySelector("span.color");

changeColorBtn.addEventListener("click", clickChangeColorBtnHandler);

function clickChangeColorBtnHandler() {
  const colorValue = getRandomHexColor();
  colorValueSpan.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;
}
