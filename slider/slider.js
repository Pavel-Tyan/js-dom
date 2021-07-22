const leftArrowBtn = document.querySelector('#left');
const rightArrowBtn = document.querySelector('#right');
const items = document.querySelector('#items');
const computedStyles = getComputedStyle(items);
const itemsList = document.querySelectorAll('.item')

const itemWidth = getComputedStyle(itemsList[0]).width;
const stepValue = parseInt(itemWidth);
const minRightPosition = 0;
const maxRightPosition = (itemsList.length - 3) * stepValue;

let currentRightPosition = 0;

items.style.right = currentRightPosition;

rightArrowBtn.addEventListener('click', e =>{
    e.preventDefault();

    if(currentRightPosition < maxRightPosition){
        currentRightPosition += stepValue;
        items.style.right = `${currentRightPosition}px`;
    }
})

leftArrowBtn.addEventListener('click', e =>{
    e.preventDefault();

    if(currentRightPosition > minRightPosition){
        currentRightPosition -= stepValue;
        items.style.right = `${currentRightPosition}px`;
    }
})




