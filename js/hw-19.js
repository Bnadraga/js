// 1

const openOrClose = document.body.classList
function openModal() {
    openOrClose.add('show-modal');
}
function closeModal() {
    openOrClose.remove('show-modal');
}

// 2

function closeModalBackdrop() {
    openOrClose.remove('show-modal');
}

// 3

const body = document.querySelector('body')
function redColor(){
    body.style.backgroundColor = 'red'
}
function greenColor(){
    body.style.backgroundColor = 'green'
}
function yellowColor(){
    body.style.backgroundColor = 'yellow'
}