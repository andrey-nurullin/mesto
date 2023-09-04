import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {

  constructor(...args) {
    super(...args);
    this._form = this._popup.querySelector('.form');
  }

  setConfirmHandler(handleConfirm) {
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => this._handleConfirm());
  }

}
