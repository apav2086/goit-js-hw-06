const ulCategoriesEl = document.querySelectorAll('h2');
console.log(`Number of categories: ${ulCategoriesEl.length}`);

const categoryEls = document.querySelectorAll('.item');

for (let i = 0; i <= categoryEls.length - 1; i++) {
    console.log(`Category: ${categoryEls[i].firstElementChild.innerText}`);
    console.log(`Elements: ${categoryEls[i].lastElementChild.childElementCount}`);
};





