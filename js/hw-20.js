// 1

document.addEventListener("keydown", function (e) {
  const gallery = document.querySelector(".gallery");
  if (e.key === "ArrowRight") {
    gallery.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  } else if (e.key === "ArrowLeft") {
    gallery.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  }
});

// 2

const controls = document.getElementById("controls");
const input = document.getElementById("input");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  let size = 30;
  const boxes = [];
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = randomColor;
    box.style.margin = "5px 0";
    size += 10;
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
renderBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});
destroyBtn.addEventListener("click", destroyBoxes);
