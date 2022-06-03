const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector("#ingredients");
const listElements = ingredients.map((el) => {
  const liElement = document.createElement("li");
  liElement.textContent = el;
  liElement.classList.add("item");
  return liElement;
});

ulElement.append(...listElements);
