const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", blurInputElementHandler);

function blurInputElementHandler() {
  const inputValueLength = inputElement.value.length;
  const REQUIRED_LENGTH = Number(inputElement.dataset.length);

  if (inputValueLength !== REQUIRED_LENGTH) {
    inputElement.classList.add("invalid");
  } else {
    inputElement.classList.add("valid");
  }
}
