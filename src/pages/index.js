import './index.css';
import { initialCards, cssFormData } from '../utils/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup';

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

function initValidators(validatorsArray) {
  const formList = Array.from( document.querySelectorAll(cssFormData.formSelector) );
  formList.forEach((form) => {
    const validator = new FormValidator(form, cssFormData);
    validator.enableValidation();
    validatorsArray[ form.id ] = validator;
  });
}

/**
 * @param {Popup} popup
 * @param {String} openBtnSelector
 * @callback handleFormSubmit
 */
function initPopup(popup, openBtnSelector, handleFormSubmit) {
  popup.setEventListeners();
  if (openBtnSelector && handleFormSubmit) {
    const openPopupBtn = document.querySelector(openBtnSelector);
    openPopupBtn.addEventListener('click', handleFormSubmit)
  }
}

const validators = [];
initValidators(validators);

const fullPhotoPopup = new PopupWithImage('#popup-full-photo');
initPopup(fullPhotoPopup);

const profilePopup = new PopupWithForm('#popup-profile', handleProfileFormSubmit);
initPopup(profilePopup, '.profile__edit-button', openProfilePopup);

const addCardPopup = new PopupWithForm('#popup-add-card', handleAddCardFormSubmit);
initPopup(addCardPopup, '.profile__add-card-button', openAddCardPopup);

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
