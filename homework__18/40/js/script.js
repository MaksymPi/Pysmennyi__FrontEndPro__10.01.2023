const slides = document.querySelectorAll('.slides-item')
const prevBtn = document.querySelector('#left-button');
const nextBtn = document.querySelector('#right-button');
let slideIndex = 0;

prevBtn.style.display = 'none';

showSlides(slideIndex)

function showSlides(n) {
  slides.forEach(image => image.style.display = 'none');
  slides[slideIndex].style.display = 'block';
  if (slideIndex === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }
  if (slideIndex === slides.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}
prevBtn.addEventListener('click', () => {
  slideIndex--;
  showSlides();
});


nextBtn.addEventListener('click', () => {
  slideIndex++;
  showSlides();
});
