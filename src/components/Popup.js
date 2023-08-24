export default class Popup {

  constructor(popupSelector) {
    //Popup includes overlay and container with content
    this._popup = document.querySelector(popupSelector);
    this._setEscClosingHandlers();
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setClosingEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._unsetClosingEventListeners();
  }

  setEventListeners() {
    this._setClosingButton();
    this._setClosingOverlay();
  }

  _setClosingButton() {
    this._closeBtn = this._popup.querySelector('.popup__close-button');
    this._closeBtn.addEventListener('click', () => this.close());
  }

  _setClosingOverlay() {
    this._popup.addEventListener('click', (event) => {
      //If the click occurred on the overlay
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }

  _setFocus() {
    this._popup.focus();
  }

  _setEscClosingHandlers() {
    this._setFocusHandler = this._handleSetFocus.bind(this);
    this._escCloseHandler = this._handleEscClose.bind(this);
  }

  _setClosingEventListeners() {
    this._popup.addEventListener('transitionend', this._setFocusHandler);
    this._popup.addEventListener('keydown', this._escCloseHandler);
  }

  _unsetClosingEventListeners() {
    this._popup.removeEventListener('transitionend', this._setFocusHandler);
    this._popup.removeEventListener('keydown', this._escCloseHandler);
  }

  _handleSetFocus(event) {
    if ((event.target === event.currentTarget) && (event.propertyName === 'visibility')) {
      this._setFocus();
    }
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
}
