const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", inputElementHandlerInput);

function inputElementHandlerInput() {
  const inputValue = inputElement.value;
  console.log(inputValue.length);
  if (inputValue.length === 0) {
    outputElement.textContent = "Anonymous";
  } else {
    outputElement.textContent = inputValue;
  }
}
