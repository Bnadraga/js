// 1

console.log(`У списку ${document.querySelectorAll(".item").length} категорії.`);
const forCategoryItem = document.querySelector("#categories").lastElementChild;
const categoryItems = function (item) {
  const nameCategories = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("li").length;
  console.log(`Категорія: ${nameCategories}`);
  console.log(`Кількість елементів: ${numberOfElements}`);
};
console.log(categoryItems(forCategoryItem));

// 2

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  ingredientsList.appendChild(item);
});

// 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("#gallery");
const markup = images
  .map(
    (image) =>
      `<li class="gallery-item">
        <img width='300' src="${image.url}" alt="${image.alt}" class="gallery-image">
      </li>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", markup);

// 4

const counterValue = document.querySelector('#value');
let currentValue = 0

function increment() {
  currentValue += 1;
  counterValue.textContent = currentValue;
}

function decrement() {
  currentValue -= 1;
  counterValue.textContent = currentValue;
}