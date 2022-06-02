const itemsEl = document.querySelectorAll("li.item");
const numberOfCategories = itemsEl.length;
console.log(`Number of categories: ${numberOfCategories}`);

itemsEl.forEach((el) => {
  const titleElement = el.querySelector("h2");
  const liElements = el.querySelectorAll("li");
  console.log(`Category: ${titleElement.textContent}`);
  console.log(`Elements: ${liElements.length}`);
});
