let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close-button');
let profileForm = document.querySelector('.profile-form');
let titleElement = document.querySelector('.profile__title');
let subtitleElement = document.querySelector('.profile__subtitle');

function handlePopupVisibility() {
  popup.classList.toggle('popup_opened');
}

function fillForm() {
  profileForm['name'].value = titleElement.textContent;
  profileForm['job'].value = subtitleElement.textContent;
}

function initPopup() {
  fillForm();
  handlePopupVisibility();
}

function fillProfileBlock() {
  titleElement.textContent = profileForm['name'].value;
  subtitleElement.textContent = profileForm['job'].value;
}

function handleFormSubmit(e) {
  e.preventDefault();
  fillProfileBlock();
  handlePopupVisibility();
}

openPopupButton.addEventListener('click', initPopup);
closePopupButton.addEventListener('click', handlePopupVisibility);
profileForm.addEventListener('submit', handleFormSubmit);
