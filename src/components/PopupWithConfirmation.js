import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {

  constructor(...args) {
    super(...args);
    this._confirmBtn = this._popup.querySelector('.button');
  }

  setConfirmHandler(handleConfirm) {
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmBtn.addEventListener('click', () => this._handleConfirm());
  }

}
