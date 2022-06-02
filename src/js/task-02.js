const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  const liElement = document.createElement("li");
  liElement.textContent = el;
  liElement.classList.add("item");
  ulElement.append(liElement);
});
