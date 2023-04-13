// СЛАЙДЕР

const slider = document.querySelector(".slider__items");
const slides = document.querySelectorAll(".slider__item");
const previewImg = document.querySelector(".slider__preview-image");
const previewHeader = document.querySelector(".slider__preview-text");
const dots = document.querySelector(".slider__dots");
const arrow = document.querySelector(".slider__arrow");
let currentSlide = 0;

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

function updateDots() {
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

  updateDots();
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
updateDots();
updatePreview();
// show first slide and start slider
showSlide(0);

// ВАЛИДАЦИЯ ФОРМЫ

const form = document.querySelector(".form");
const inputs = form.querySelectorAll(".form__input");
const nameInput = form.querySelector("#name");
const phoneInput = form.querySelector("#phone");

const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
const phoneRegex = /^\+?[0-9]{10,14}$/;
// Функция для проверки, является ли строка номером телефона
function isPhoneNumber(value) {
  return phoneRegex.test(value);
}
// Функция для проверки, что имя содержит только латиницу и кириллицу
function validateName() {
  if (!nameRegex.test(nameInput.value)) {
    showInputError(nameInput);
    return false;
  }
  hideInputError(nameInput);
  return true;
}

// Функция для проверки номера телефона
function validatePhone() {
  if (!isPhoneNumber(phoneInput.value)) {
    showInputError(phoneInput);
    return false;
  }
  hideInputError(phoneInput);
  return true;
}

function handleSubmit(event) {
  event.preventDefault();

  // Проверяем, что имя содержит только латиницу и кириллицу
  if (!validateName()) {
    return;
  }

  // Проверяем номер телефона
  if (!validatePhone()) {
    return;
  }
}

form.addEventListener("submit", handleSubmit);

function showInputError(input) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.classList.add("active");
}

function hideInputError(input) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add("active");
}

// ПОПАП МОБИЛЬНОГО МЕНЮ

const menuPopup = document.querySelector(".menu-popup");
const toggleBtn = document.querySelector(".menu__show-button");

function toggleMenu() {
  if (menuPopup.classList.contains("active")) {
    menuPopup.classList.remove("active");
    toggleBtn.style.backgroundImage =
      "url('../../../images/header-menu-icon.svg')";
  } else {
    menuPopup.classList.add("active");
    toggleBtn.style.backgroundImage =
      "url('../../../images/header-close-icon.svg')";
  }
}

toggleBtn.addEventListener("click", () => {
  toggleMenu();
});

menuPopup.addEventListener("mousedown", (evt) => {
  if (evt.target === evt.currentTarget) {
    toggleMenu();
  }
});

// ПОПАП МЕНЮ АККАУНТА

const accountPopup = document.querySelector(".account-popup");
const openAccountButton = document.getElementById("account-icon");

function toggleAccountMenu() {
  if (accountPopup.classList.contains("active")) {
    accountPopup.classList.remove("active");
  } else {
    accountPopup.classList.add("active");
  }
}

openAccountButton.addEventListener("click", () => {
  toggleAccountMenu();
});
