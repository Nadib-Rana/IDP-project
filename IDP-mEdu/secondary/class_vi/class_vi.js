const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let currentIndex = 0;
const totalImages = images.length;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    updateSlider();
}

function showPrevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateSlider();
}

function updateSlider() {
    const translateXValue = -currentIndex * 100;
    slides.style.transform = `translateX(${translateXValue}%)`;
}

setInterval(showNextImage, 5000);

document.querySelector('.slider::after').addEventListener('click', showNextImage);
document.querySelector('.slider::before').addEventListener('click', showPrevImage);
