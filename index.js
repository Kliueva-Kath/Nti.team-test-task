/* const slider = document.querySelector(".slider");
const sliderItems = slider.querySelectorAll(".slider__item");
const sliderPreview = slider.querySelector(".slider__preview");
const sliderPreviewImg = sliderPreview.querySelector("slider__preview-image");
const sliderPreviewHeader = sliderPreview.querySelector("slider__preview-text");
const sliderDots = slider.querySelectorAll(".slider__dots");
const sliderArrowRight = slider.querySelector(".slider__arrow_right");

let currentSlide = 0;
let intervalId;

function showSlide(n) {
  // hide all slides
  sliderItems.forEach((item) => item.classList.remove("active"));

  // show current slide
  sliderItems[n].classList.add("active");

  // update current slide
  currentSlide = n;

  // update preview
  sliderPreviewImg.src = sliderItems[n + 1]
    ? sliderItems[n + 1].querySelector("img").src
    : sliderItems[0].querySelector("img").src;
  sliderPreviewHeader.textContent = sliderItems[n + 1]
    ? sliderItems[n + 1].querySelector("h2").textContent
    : sliderItems[0].querySelector("h2").textContent;

  // update dots
  sliderDots.forEach((dot) => dot.classList.remove("slider__dot_active"));
  sliderDots[n].classList.add("slider__dot_active");
}

function nextSlide() {
  showSlide(currentSlide === sliderItems.length - 1 ? 0 : currentSlide + 1);
}

function startSlider() {
  intervalId = setInterval(nextSlide, 3000);
}

function stopSlider() {
  clearInterval(intervalId);
}

// show first slide and start slider
showSlide(0);
startSlider();

// add event listeners
sliderPreview.addEventListener("click", nextSlide);
sliderArrowRight.addEventListener("click", nextSlide);
sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    stopSlider();
    startSlider();
  });
});
 */
/* 
const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider__item");
const arrowRight = document.querySelector(".slider__arrow_right");
const dotsContainer = document.querySelector(".slider__dots");
let currentIndex = 0;

function moveSlider() {
  slider.style.transform = `translateX(-${
    currentIndex * (100 / sliderItems.length)
  }%)`;
}

function showSlide(index) {
  sliderItems[currentIndex].classList.remove("active");
  currentIndex = (index + sliderItems.length) % sliderItems.length;
  sliderItems[currentIndex].classList.add("active");
  moveSlider();
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".slider__dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function createDots() {
  for (let i = 0; i < sliderItems.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("slider__dot");
    dot.addEventListener("click", () => {
      showSlide(i);
    });
    dotsContainer.appendChild(dot);
  }
}

arrowRight.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

createDots();
updateDots();
moveSlider();
 */

const slider = document.querySelector(".slider__items");
const slides = document.querySelectorAll(".slider__item");
const previewImg = document.querySelector(".slider__preview-image");
const previewHeader = document.querySelector(".slider__preview-text");
const dots = document.querySelector(".slider__dots");
const arrow = document.querySelector(".slider__arrow");
let currentSlide = 0;

/* // Set up dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("slider__dot");
  dot.addEventListener("click", () => {
    goToSlide(i);
  });
  dots.appendChild(dot);
}

// Highlight current dot
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
} */

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("slider__dot");
    dot.addEventListener("click", () => {
      showSlide(i);
    });
    dots.appendChild(dot);
  }
}
function updateDots(currentSlide) {
  const dotList = document.querySelectorAll(".slider__dot");
  dotList.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Update preview
function updatePreview() {
  const nextSlide = (currentSlide + 1) % slides.length;
  previewImg.src = slides[nextSlide].querySelector(".slider__image").src;
  previewHeader.textContent =
    slides[nextSlide].querySelector(".slider__title").textContent;
}

function showSlide(n) {
  // hide all slides
  slides.forEach((item) => item.classList.remove("active"));

  // show current slide
  slides[n].classList.add("active");

  // update current slide
  currentSlide = n;

  /* // update preview
  previewImg.src = slides[n + 1]
    ? slides[n + 1].querySelector(".slider__preview-image").src
    : slides[0].querySelector(".slider__preview-image").src;
  previewHeader.textContent = slides[n + 1]
    ? slides[n + 1].querySelector("slider__preview-text").textContent
    : slides[0].querySelector("slider__preview-text").textContent; */

  // update dots
  updateDots(n);
  updatePreview();
}

// Go to slide
function goToSlide(slideIndex) {
  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  currentSlide = slideIndex;
  showSlide(slideIndex);
}

// Next slide
function nextSlide() {
  if (currentSlide === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentSlide + 1);
  }
  updatePreview();
}

// Event listeners
arrow.addEventListener("click", nextSlide);

// Initialize
createDots();
updateDots(currentSlide);
updatePreview();
// show first slide and start slider
showSlide(0);

// МЕНЮ

const popup = document.querySelector(".popup");
const toggleBtn = document.querySelector(".menu__show-button");

function toggleMenu() {
  if (popup.classList.contains("active")) {
    popup.classList.remove("active");
    toggleBtn.style.backgroundImage =
      "url('../../../images/header-menu-icon.svg')";
  } else {
    popup.classList.add("active");
    toggleBtn.style.backgroundImage =
      "url('../../../images/header-close-icon.svg')";
  }
}

toggleBtn.addEventListener("click", () => {
  toggleMenu();
});

popup.addEventListener("mousedown", (evt) => {
  if (evt.target === evt.currentTarget) {
    toggleMenu();
  }
});
