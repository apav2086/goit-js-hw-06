const sizeControlEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');
console.log(outputEl.innerHTML);
sizeControlEl.addEventListener('input', event => {
    //console.log(sizeControlEl.value);
    let sizeChanger = `${sizeControlEl.value}px`;
    //console.log(outputEl.style);
    outputEl.style.fontSize = sizeChanger;
});


