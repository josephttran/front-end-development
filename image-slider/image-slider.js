const sliderImages = [
  "./images/fitness1.svg",
  "./images/fitness2.svg",
  "./images/fitness3.svg", 
  "./images/fitness4.svg",
  "./images/fitness5.svg"
];

let slideIndex = 0;
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('#slider-dot .dot');
const sliderBack = document.querySelector('.slider-back');
const sliderForward = document.querySelector('.slider-forward');

sliderBack.addEventListener('click', function() {
  const previousIndex = slideIndex;

  if (slideIndex === 0) {
    slideIndex = sliderImages.length - 1;
  } else {
    slideIndex--;
  }

  displaySliderImage(slideIndex);
  fillDot(previousIndex, slideIndex);
});

sliderForward.addEventListener('click', function() {
  const previousIndex = slideIndex;

  if (slideIndex === sliderImages.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  displaySliderImage(slideIndex);
  fillDot(previousIndex, slideIndex);
});

function displaySliderImage(slideIndex) {
  slider.style.backgroundImage = `url("${sliderImages[slideIndex]}")`;
}

function fillDot(previousIndex, currentIndex) {
  dots[previousIndex].style.backgroundColor = '#000';
  dots[currentIndex].style.backgroundColor = '#fff';
}

function displayInitialImageDot() {
  slider.style.backgroundImage = `url("${sliderImages[slideIndex]}")`;
  dots[slideIndex].style.backgroundColor = '#fff';
}

displayInitialImageDot();