import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {

  constructor(...args) {
    super(...args);
    this._form = this._popup.querySelector('.form');
  }

  setSubmitHandler(handleConfirm) {
    this._handleFormSubmit = handleConfirm;
  }

  setEventListeners(...args) {
    super.setEventListeners(...args);
    this._form.addEventListener('submit', () => this._handleFormSubmit());
  }

  getFormId() {
    return this._form.id;
  }

}
