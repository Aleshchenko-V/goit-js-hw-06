function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const quontityDivsInput = document.querySelector("input");
const containerElement = document.querySelector("#boxes");
let sideSize = 30;

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(quontityDivsInput.value);
  console.log(amount);
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    let color = getRandomHexColor();

    markup += `<div  style="background-color:${color}; width:${sideSize}px; height:${sideSize}px"></div>`;
    sideSize += 10;
  }

  sideSize = 30;
  containerElement.innerHTML = markup;
}

function destroyBoxes() {
  containerElement.innerHTML = "";
}
