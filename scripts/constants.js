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

const cssFormData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

const profilePopup = document.querySelector('#popup-profile');
const addCardPopup = document.querySelector('#popup-add-card');
const fullPhotoPopup = document.querySelector('#popup-full-photo');
const profileForm = getPopupForm(profilePopup);
const addCardForm = getPopupForm(addCardPopup);
const titleElement = document.querySelector('.profile__title');
const subtitleElement = document.querySelector('.profile__subtitle');
const fullPhotoPopupImage = fullPhotoPopup.querySelector('.img-with-caption__full-img');
const fullPhotoPopupCaption = fullPhotoPopup.querySelector('.img-with-caption__caption');

function getPopupForm(thisPopup) {
  return thisPopup.querySelector(cssFormData.formSelector);
}

export {
  initialCards, profilePopup, addCardPopup, fullPhotoPopup, profileForm, addCardForm,
  titleElement, subtitleElement, fullPhotoPopupCaption, fullPhotoPopupImage
};
