import './index.css';
import { cssFormData, apiConfig } from '../utils/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup';
import Api from '../components/Api';

function handleProfileFormSubmit() {
  const formData = profilePopup.getFormData();
  const newUserData = Object.fromEntries( formData.entries() );
  userInfo.setUserInfo(newUserData);
  api.setUserInfo(newUserData);
  profilePopup.close();
}

function renderCard(cardData) {
  const card = new Card(
    cardData,
    '#card',
    fullPhotoPopup.open.bind(fullPhotoPopup)
  );
  const cardElement = card.getView();
  this.addItem(cardElement);
}

function handleAddCardFormSubmit() {
  const formData = addCardPopup.getFormData();
  const newCardData = Object.fromEntries( formData.entries() );
  renderCard(newCardData);
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

const userInfo = new UserInfo({
  selectorName: '.profile__title',
  selectorAbout: '.profile__subtitle',
  selectorAvatar: '.profile__avatar'
});

const api = new Api(apiConfig);
api.getUserInfo()
  .then(data => userInfo.setUserInfo(data))
  .catch(error => console.log(error));

const validators = [];
initValidators(validators);

const fullPhotoPopup = new PopupWithImage('#popup-full-photo');
initPopup(fullPhotoPopup);

const profilePopup = new PopupWithForm('#popup-profile', handleProfileFormSubmit);
initPopup(profilePopup, '.profile__edit-button', openProfilePopup);

const addCardPopup = new PopupWithForm('#popup-add-card', handleAddCardFormSubmit);
initPopup(addCardPopup, '.profile__add-card-button', openAddCardPopup);

api.getInitialCards()
  .then(data => {
    const cardsSection = new Section(
      {
        items: data,
        renderer: renderCard
      },
      '.cards-grid'
    );
    cardsSection.renderItems();
  })
  .catch(error => console.log(error));


