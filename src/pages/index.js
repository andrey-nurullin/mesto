import './index.css';
import { cssFormData, apiConfig } from '../utils/constants.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';

function renderCard(cardData) {
  const card = new Card(
    cardData,
    '#card',
    userInfoPanel.getUserInfo().get('_id'),
    fullPhotoPopup.open.bind(fullPhotoPopup),
    openConfirmDeleteCardPopup,
    handleLikeClick
  );
  const cardElement = card.getView();
  cardsSection.addItem(cardElement);
}

/**
 * @param {Card} card
 */
function handleLikeClick(card) {
  const cardId = card.getId();
  const likeAction = card.getIsLiked() ? api.unlikeCard(cardId) : api.likeCard(cardId);
  likeAction
    .then(cardData => card.updateLikeStatus(cardData))
    .catch(handleError);
}

/**
 * @param {Card} card
 */
function openConfirmDeleteCardPopup(card) {
  confirmDeleteCardPopup.open();
  confirmDeleteCardPopup.setConfirmHandler(() => {
    api.deleteCard(card.getId())
      .then(() => card.remove())
      .catch(handleError)
      .finally(() => {
        confirmDeleteCardPopup.close();
      });
  });
}

function handleProfileFormSubmit() {
  const formData = profilePopup.getFormData();
  const newUserData = Object.fromEntries( formData.entries() );
  api.setUserInfo(newUserData)
    .then(data => userInfoPanel.setUserInfo(data))
    .catch(handleError);
  profilePopup.close();
}

function handleAvatarSubmit() {
  const avatarData = avatarEditPopup.getDataAsObject();
  api.updateAvatar(avatarData)
    .then(userData => userInfoPanel.setUserInfo(userData))
    .catch((err) => console.log(err.message))
    .finally(avatarEditPopup.close());
}

function handleAddCardFormSubmit() {
  const rawCardData = addCardPopup.getDataAsObject();
  api.addCard(rawCardData)
    .then(cardData => renderCard(cardData))
    .catch(handleError);
  addCardPopup.close();
}

function resetPopupFormValidation(popup) {
  validators[ popup.getFormId() ].resetValidation();
}

function openAddCardPopup() {
  addCardPopup.resetForm();
  resetPopupFormValidation(addCardPopup);
  addCardPopup.open();
}

function openProfilePopup() {
  const userData = userInfoPanel.getUserInfo();
  profilePopup.setFormData(userData);
  resetPopupFormValidation(profilePopup);
  profilePopup.open();
}

function openAvatarEditPopup() {
  avatarEditPopup.resetForm();
  resetPopupFormValidation(avatarEditPopup);
  avatarEditPopup.open();
}

function initValidators(validatorsArray) {
  const formList = Array.from( document.querySelectorAll(cssFormData.formSelector) );
  formList.forEach((form) => {
    const validator = new FormValidator(form, cssFormData);
    validator.enableValidation();
    validatorsArray[ form.id ] = validator;
  });
}

function handleError(error) {
  console.log(error);
}

const userInfoPanel = new UserInfo({
  selectorName: '.profile__title',
  selectorAbout: '.profile__subtitle',
  selectorAvatar: '.profile__avatar'
});

const validators = [];
initValidators(validators);

const fullPhotoPopup = new PopupWithImage('#popup-full-photo');
fullPhotoPopup.setEventListeners();

const profilePopup = new PopupWithForm('#popup-profile', handleProfileFormSubmit);
profilePopup.setEventListeners('.profile__edit-button', openProfilePopup);

const addCardPopup = new PopupWithForm('#popup-add-card', handleAddCardFormSubmit);
addCardPopup.setEventListeners('.profile__add-card-button', openAddCardPopup);

const avatarEditPopup = new PopupWithForm('#popup-avatar-edit', handleAvatarSubmit);
avatarEditPopup.setEventListeners('.profile__avatar-edit-button', openAvatarEditPopup);

const confirmDeleteCardPopup = new PopupWithConfirmation('#popup-confirmation');
confirmDeleteCardPopup.setEventListeners();

const cardsSection = new Section(renderCard, '.cards-grid');
const api = new Api(apiConfig);

//We need to match user ID with card owner ID
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, cards]) => {
    userInfoPanel.setUserInfo(userInfo);
    cardsSection.renderItems( cards.reverse() );
  })
  .catch(handleError);

