let inputEl = document.querySelector('#validation-input');
 const validLengthEl = inputEl.dataset.length;
console.log(validLengthEl);
let maxNumEl = parseInt(validLengthEl);
let stringValueEl = inputEl.value.length;


inputEl.addEventListener('input', (event) => {
    if (inputEl.value.length === maxNumEl) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    if (inputEl.value.length != maxNumEl) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});

    inputEl.addEventListener('blur', (event) => {
        let newMessageEl = inputEl.placeholder = `You entered ${event.target.value.length} symbols`;
        event.target.value = newMessageEl;
    });

