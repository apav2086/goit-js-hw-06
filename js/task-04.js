
const counterEl = document.querySelector('#counter');
console.log(counterEl);

counterEl.firstElementChild.setAttribute('class', 'decrement');
counterEl.lastElementChild.setAttribute('class', 'increment');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');
const valueEl = document.querySelector('#value');
let counterValue = 0;


console.log(incrementBtn);
console.log(decrementBtn);

incrementBtn.addEventListener('click', () => {
    counterValue++;
    valueEl.innerHTML = counterValue;
});
decrementBtn.addEventListener('click', () => {
    if (counterValue != 0) {
counterValue--;
    valueEl.innerHTML = counterValue;
    }
});