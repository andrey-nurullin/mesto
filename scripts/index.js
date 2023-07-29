import {
  initialCards, profilePopup, addCardPopup, fullPhotoPopup, profileForm, addCardForm,
  titleElement, subtitleElement, fullPhotoPopupCaption, fullPhotoPopupImage,
  cardsContainer, cssFormData
} from './constants.js';

import FormValidator from './FormValidator.js';

function initPopupClosingBtn(thisPopup) {
  const closePopupBtn = thisPopup.querySelector('.popup__close-button');
  closePopupBtn.addEventListener('click', () => closePopup(thisPopup));
}

function initPopupClosingOverlay(thisPopup) {
  thisPopup.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closePopup(thisPopup);
    }
  });
}

function initPopupClosing(thisPopup) {
  initPopupClosingBtn(thisPopup);
  initPopupClosingOverlay(thisPopup);
}

function handlePopupHotKey(e) {
  if (e.key === 'Escape') {
    closePopup(e.currentTarget);
  }
}

function handlePopupTransitionEnd(e) {
  if ((e.target === e.currentTarget) && (e.propertyName === 'visibility')) {
    //The current popup gets focus
    e.currentTarget.focus();
  }
}

function openPopup(thisPopup) {
  thisPopup.addEventListener('transitionend', handlePopupTransitionEnd);
  thisPopup.classList.add('popup_opened');
  thisPopup.addEventListener('keydown', handlePopupHotKey);
}

function closePopup(thisPopup) {
  thisPopup.removeEventListener('transitionend', handlePopupTransitionEnd);
  thisPopup.classList.remove('popup_opened');
  thisPopup.removeEventListener('keydown', handlePopupHotKey);
}

function fillProfileForm() {
  profileForm['name'].value = titleElement.textContent;
  profileForm['job'].value = subtitleElement.textContent;
}

function fillProfileBlock() {
  titleElement.textContent = profileForm['name'].value;
  subtitleElement.textContent = profileForm['job'].value;
}

function handleProfileFormSubmit() {
  fillProfileBlock();
  closePopup(profilePopup);
}

function handleAddCardFormSubmit() {
  createAndAddCard(
    addCardForm['title'].value,
    addCardForm['link'].value
  );
  closePopup(addCardPopup);
}

function getCardElement(name, link) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  const image = cardElement.querySelector('.cards-grid__card-photo');
  image.src = link;
  image.alt += ": " + name;
  cardElement.querySelector('.cards-grid__card-caption').textContent = name;
  return cardElement;
}

function handleCardLike(likeBtn) {
  likeBtn.classList.toggle('cards-grid__like-button_active');
}

function handleCardDelete(deleteBtn) {
  const cardNode = deleteBtn.closest('.cards-grid__card');
  cardNode.remove();
}

function handleOpenPhotoPopup(name, link) {
  fullPhotoPopupCaption.textContent = name;
  fullPhotoPopupImage.src = link;
  fullPhotoPopupImage.alt = name;
  fullPhotoPopupImage.onload = function() {
    openPopup(fullPhotoPopup);
  };
}

function initCardButtons(cardNode) {
  const likeBtn = cardNode.querySelector('.cards-grid__like-button');
  likeBtn.addEventListener('click', () => handleCardLike(likeBtn));

  const deleteBtn = cardNode.querySelector('.cards-grid__delete-button');
  deleteBtn.addEventListener('click', () => handleCardDelete(deleteBtn));
}

function initOpenPhotoPopupBtn(cardNode, name, link) {
  const openPhotoPopupBtn = cardNode.querySelector('.cards-grid__card-photo');
  openPhotoPopupBtn.addEventListener('click', () => handleOpenPhotoPopup(name, link));
}

function createCard(name, link) {
  const cardNode = getCardElement(name, link);
  initCardButtons(cardNode);
  initOpenPhotoPopupBtn(cardNode, name, link);
  return cardNode;
}

function addCard(cardNode) {
  cardsContainer.prepend(cardNode);
}

function createAndAddCard(name, link) {
  const card = createCard(name, link);
  addCard(card);
}

function createAndAddCards(cardDataArray) {
  cardDataArray.forEach(cardData => createAndAddCard(cardData.name, cardData.link));
}

function initFullPhotoPopup() {
  // The opening of the pop-up is initialized when each card is initialized
  initPopupClosing(fullPhotoPopup);
}

function openProfilePopup() {
  fillProfileForm();
  openPopup(profilePopup);
}

function openAddCardPopup() {
  addCardForm.reset();
  openPopup(addCardPopup);
}

function initProfilePopup() {
  const openProfilePopupBtn = document.querySelector('.profile__edit-button');
  openProfilePopupBtn.addEventListener('click', openProfilePopup);
  initPopupClosing(profilePopup);
}

function initAddCardPopup() {
  const openAddCardPopupBtn = document.querySelector('.profile__add-card-button');
  openAddCardPopupBtn.addEventListener('click', openAddCardPopup);
  initPopupClosing(addCardPopup);
}

function initFormValidaton(cssFormData) {
  const formList = Array.from(document.querySelectorAll(cssFormData.formSelector));
  formList.forEach((form) => {
    const validator = new FormValidator(form, cssFormData);
    validator.enableValidation();
  });
}

createAndAddCards(initialCards);
initFullPhotoPopup();
initProfilePopup();
initAddCardPopup();
fillProfileForm();
initFormValidaton(cssFormData);
profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
