/*? no js js needed from me */
const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let autoPlay = setTimeout(() => {
    next.click()
},7000);

next.addEventListener('click', () => {
    initSlider('next');
});
prev.addEventListener('click', () => {
    initSlider('prev');
});

const initSlider = (type) =>{
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (type === 'next') {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        const lastItemPosition = sliderItems.length - 1;
        list.prepend(sliderItems[lastItemPosition]);
        thumbnail.prepend(thumbnailItems[lastItemPosition]);
        slider.classList.add('prev');
    }

    setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, 2000);

    clearTimeout(autoPlay);
    autoPlay = setTimeout(() => {
        next.click()
    },7000);
    
};