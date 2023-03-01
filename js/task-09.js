function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorEl = document.querySelector('body');
let colorIdEl = document.querySelector('.color');
console.log(colorIdEl.innerHTML);
document.querySelector('button').
  addEventListener('click', (event) => {
    event = getRandomHexColor();
    changeColorEl.style.backgroundColor = event; 
    console.log(event);
    colorIdEl.innerHTML = event;
});


