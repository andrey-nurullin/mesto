import './index.css';
import { initialCards, cssFormData } from '../components/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

function fillProfileBlock() {
  const profileData = profilePopup.getFormData();
  userInfo.setUserInfo(profileData);
}

function handleProfileFormSubmit() {
  fillProfileBlock();
  profilePopup.close();
}

function renderCard(cardData) {
  const card = new Card(
    cardData,
    '#card',
    fullPhotoPopup.open.bind(fullPhotoPopup)
  );
  const cardElement = card.getView();
  cardsSection.addItem(cardElement);
}

function handleAddCardFormSubmit() {
  const newCardData = addCardPopup.getFormData();
  renderCard({
    name: newCardData.get('name'),
    link: newCardData.get('link')
  });
  addCardPopup.close();
}

function openAddCardPopup() {
  addCardPopup.resetForm();
  validators[ addCardPopup.getFormId() ].resetValidation();
  addCardPopup.open();
}

function openProfilePopup() {
  const userData = userInfo.getUserInfo();
  profilePopup.setFormData(userData);
  validators[ profilePopup.getFormId() ].resetValidation();
  profilePopup.open();
}

const formList = Array.from( document.querySelectorAll(cssFormData.formSelector) );
const validators = [];
formList.forEach((form) => {
  const validator = new FormValidator(form, cssFormData);
  validator.enableValidation();
  validators[ form.id ] = validator;
});

const fullPhotoPopup = new PopupWithImage('#popup-full-photo');
fullPhotoPopup.setEventListeners();

const profilePopup = new PopupWithForm('#popup-profile', handleProfileFormSubmit);
profilePopup.setEventListeners();
const openProfilePopupBtn = document.querySelector('.profile__edit-button');
openProfilePopupBtn.addEventListener('click', openProfilePopup);

const addCardPopup = new PopupWithForm('#popup-add-card', handleAddCardFormSubmit);
addCardPopup.setEventListeners();
const openAddCardPopupBtn = document.querySelector('.profile__add-card-button');
openAddCardPopupBtn.addEventListener('click', openAddCardPopup);

const userInfo = new UserInfo({
  selectorName: '.profile__title',
  selectorAbout: '.profile__subtitle'
});

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: renderCard
  },
  '.cards-grid'
);
cardsSection.renderItems();
