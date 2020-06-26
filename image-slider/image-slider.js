window.addEventListener('DOMContentLoaded', function() {
  displaySliderImage();
});

const sliderImages = [
  "./images/fitness1.svg",
  "./images/fitness2.svg",
  "./images/fitness3.svg", 
  "./images/fitness4.svg",
  "./images/fitness5.svg"
];

function displaySliderImage() {
  const slider = document.querySelector('.slider');

  slider.style.backgroundImage = `url("${sliderImages[1]}")`;
}
