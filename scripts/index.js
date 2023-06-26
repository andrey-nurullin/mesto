import {initialCards} from './constants.js';

const profilePopup = document.querySelector('#popup-profile');
const addCardPopup = document.querySelector('#popup-add-card');
const fullPhotoPopup = document.querySelector('#popup-full-photo');
const profileForm = getPopupForm(profilePopup);
const addCardForm = getPopupForm(addCardPopup);
const titleElement = document.querySelector('.profile__title');
const subtitleElement = document.querySelector('.profile__subtitle');

function getPopupForm(thisPopup) {
  return thisPopup.querySelector('.popup-form');
}

function initPopupClosingBtn(thisPopup) {
  const closePopupBtn = thisPopup.querySelector('.popup__close-button');
  closePopupBtn.addEventListener('click', () => renderPopupVisibility(thisPopup));
}

function renderPopupVisibility(thisPopup) {
  thisPopup.classList.toggle('popup_opened');
}

function fillProfileForm() {
  profileForm['name'].value = titleElement.textContent;
  profileForm['job'].value = subtitleElement.textContent;
}

function openProfilePopup() {
  fillProfileForm();
  renderPopupVisibility(profilePopup);
}

function fillProfileBlock() {
  titleElement.textContent = profileForm['name'].value;
  subtitleElement.textContent = profileForm['job'].value;
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  fillProfileBlock();
  renderPopupVisibility(profileForm);
}

function openAddCardPopup() {
  renderPopupVisibility(addCardPopup);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  addCard(
    addCardForm['name'].value,
    addCardForm['link'].value
  );
  addCardForm.reset();
  renderPopupVisibility(addCardPopup);
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
  fullPhotoPopup.querySelector('.img-with-caption__caption').textContent = name;
  const image = fullPhotoPopup.querySelector('.img-with-caption__full-img');
  image.src = link;
  image.alt = name;
  image.onload = function() {
    renderPopupVisibility(fullPhotoPopup);
  }
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

function addCard(name, link) {
  const cardNode = getCardElement(name, link);
  initCardButtons(cardNode);
  initOpenPhotoPopupBtn(cardNode, name, link);

  document.querySelector('.cards-grid').prepend(cardNode);
}

function addCards(cardDataArray) {
  cardDataArray.forEach(cardData => addCard(cardData.name, cardData.link));
}

function initFullPhotoPopup() {
  // The opening of the pop-up is initialized when each card is initialized
  initPopupClosingBtn(fullPhotoPopup);
}

function initProfilePopup() {
  const openProfilePopupBtn = document.querySelector('.profile__edit-button');
  openProfilePopupBtn.addEventListener('click', openProfilePopup);
  initPopupClosingBtn(profilePopup);
}

function initAddCardPopup() {
  const openAddCardPopupBtn = document.querySelector('.profile__add-card-button');
  openAddCardPopupBtn.addEventListener('click', openAddCardPopup);
  initPopupClosingBtn(addCardPopup);
}

addCards(initialCards);
initFullPhotoPopup();
initProfilePopup();
initAddCardPopup();
profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
