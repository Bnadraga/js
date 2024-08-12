// 1

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  btn1.textContent = input1.value;
};

// 2

const image1 = document.querySelector("#image1");
const input2 = document.querySelector("#input2");
function changeImage() {
  image1.src = input2.value;
}

// 3

const image2 = document.querySelector("#image2");
const input3 = document.querySelector("#input3");
const input3_2 = document.querySelector("#input3-2");
function changeImage2() {
  image2.src = input3.value;
  image2.alt = input3_2.value;
}

// 4

const firstLi = document.querySelector("#list").firstElementChild;
const input4 = document.querySelector("#input4");
function changeText() {
  firstLi.textContent = input4.value;
}
