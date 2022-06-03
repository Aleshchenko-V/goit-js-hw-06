const selectFontSizeEl = document.querySelector("input#font-size-control");
const spanTextElement = document.querySelector("span#text");

selectFontSizeEl.addEventListener("input", handleSelectFontSizeElInput);

function handleSelectFontSizeElInput() {
  const fontSize = selectFontSizeEl.value;
  spanTextElement.style.fontSize = `${fontSize}px`;
}
