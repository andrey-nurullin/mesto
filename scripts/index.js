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

function getCardElement(name, link) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.cards-grid__card-photo').src = link;
  cardElement.querySelector('.cards-grid__card-caption').textContent = name;
  return cardElement;
}

function addCardElement(name, link) {
  let cardNode = getCardElement(name, link);
  document.querySelector('.cards-grid').prepend(cardNode);
}

function initCards(cardDataArray) {
  cardDataArray.forEach(cardData => addCardElement(cardData.name, cardData.link));
}

initCards(initialCards);
openPopupButton.addEventListener('click', initPopup);
closePopupButton.addEventListener('click', handlePopupVisibility);
profileForm.addEventListener('submit', handleFormSubmit);
