const caroselSlide = document.querySelector('.carosel-slide');
const caroselImages = document.querySelectorAll('.carosel-slide img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter!
let counter = 1;
const size = caroselImages[0].clientWidth;

caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= caroselImages.length - 1) { return; }
    caroselSlide.style.transition = "transform .6s ease-in-out";
    counter++;
    caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) { return; }
    caroselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

caroselSlide.addEventListener('transitionend', () => {
    if (caroselImages[counter].id === 'lastClone') {
        caroselSlide.style.transition = "none";
        counter = caroselImages.length - 2;
        caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (caroselImages[counter].id === 'firstClone') {
        caroselSlide.style.transition = "none";
        counter = caroselImages.length - counter;
        caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

})