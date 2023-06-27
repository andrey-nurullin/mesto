import {initialCards, profilePopup, addCardPopup, fullPhotoPopup, profileForm, addCardForm, titleElement, subtitleElement} from './constants.js';

function initPopupClosingBtn(thisPopup) {
  const closePopupBtn = thisPopup.querySelector('.popup__close-button');
  closePopupBtn.addEventListener('click', () => closePopup(thisPopup));
}

function openPopup(thisPopup) {
  thisPopup.classList.add('popup_opened');
}

function closePopup(thisPopup) {
  thisPopup.classList.remove('popup_opened');
}

function fillProfileForm() {
  profileForm['name'].value = titleElement.textContent;
  profileForm['job'].value = subtitleElement.textContent;
}

function openProfilePopup() {
  fillProfileForm();
  openPopup(profilePopup);
}

function fillProfileBlock() {
  titleElement.textContent = profileForm['name'].value;
  subtitleElement.textContent = profileForm['job'].value;
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  fillProfileBlock();
  closePopup(profilePopup);
}

function openAddCardPopup() {
  openPopup(addCardPopup);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  addCard(
    addCardForm['name'].value,
    addCardForm['link'].value
  );
  addCardForm.reset();
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
  fullPhotoPopup.querySelector('.img-with-caption__caption').textContent = name;
  const image = fullPhotoPopup.querySelector('.img-with-caption__full-img');
  image.src = link;
  image.alt = name;
  image.onload = function() {
    openPopup(fullPhotoPopup);
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
