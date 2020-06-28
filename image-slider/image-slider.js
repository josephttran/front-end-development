const dotActiveFill = '#fff';
const dotNotActiveFill = '#000';

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

dots.forEach(dot => {
  dot.addEventListener('click', function(event) {
    let previousIndex;
    slideIndex = parseInt(event.target.attributes.index.value);

    // Style bg color stored as rbg(255, 255, 255) not #fff
    dots.forEach((dot, index) => {
      if (dot.style.backgroundColor === 'rgb(255, 255, 255)') {
        previousIndex = index;
      }
    });

    if (previousIndex !== slideIndex) {
      displaySliderImage(slideIndex);
      fillDot(previousIndex, slideIndex);
    }
  });
});

function displaySliderImage(slideIndex) {
  slider.style.backgroundImage = `url("${sliderImages[slideIndex]}")`;
}

function fillDot(previousIndex, currentIndex) {
  dots[previousIndex].style.backgroundColor = dotNotActiveFill;
  dots[currentIndex].style.backgroundColor = dotActiveFill;
}

function displayInitialImageDot() {
  slider.style.backgroundImage = `url("${sliderImages[slideIndex]}")`;
  dots[slideIndex].style.backgroundColor = dotActiveFill;
}

displayInitialImageDot();