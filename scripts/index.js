const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profilePopup = document.querySelector('#popup-profile');
const addCardPopup = document.querySelector('#popup-add-card');
const profileForm = getPopupForm(profilePopup);
const addCardForm = getPopupForm(addCardPopup);
const openProfilePopupBtn = document.querySelector('.profile__edit-button');
const openAddCardPopupBtn = document.querySelector('.profile__add-card-button');
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

function addCardElement() {
  let name = addCardForm['name'].value;
  let link = addCardForm['link'].value;
  addCard(name, link);
}

function clearAddCardForm() {
  addCardForm.reset();
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  addCardElement();
  clearAddCardForm();
  renderPopupVisibility(addCardPopup);
}

function getCardElement(name, link) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.cards-grid__card-photo').src = link;
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

function initCardButtons(card) {
  const likeBtn = card.querySelector('.cards-grid__like-button');
  likeBtn.addEventListener('click', () => handleCardLike(likeBtn));

  const deleteBtn = card.querySelector('.cards-grid__delete-button');
  deleteBtn.addEventListener('click', () => handleCardDelete(deleteBtn));
}

function addCard(name, link) {
  const cardNode = getCardElement(name, link);
  initCardButtons(cardNode);
  document.querySelector('.cards-grid').prepend(cardNode);
}

function addCards(cardDataArray) {
  cardDataArray.forEach(cardData => addCard(cardData.name, cardData.link));
}

addCards(initialCards);
openProfilePopupBtn.addEventListener('click', openProfilePopup);
openAddCardPopupBtn.addEventListener('click', openAddCardPopup);
initPopupClosingBtn(profilePopup);
initPopupClosingBtn(addCardPopup);
profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleAddCardFormSubmit);
