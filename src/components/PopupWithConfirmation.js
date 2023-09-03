import PopupWithForm from './PopupWithForm.js';

export default class PopupWithConfirmation extends PopupWithForm {

  setConfirmHandler(handleFormConfirm) {
    this._handleFormSubmit = handleFormConfirm;
  }

}
