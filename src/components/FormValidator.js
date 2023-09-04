export default class FormValidator {

  constructor(form, config) {
    this._form = form;
    this._config = config;
    this._setSubmitButton();
    this._setInputList();
    this._setInputErrorList();
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonState();
    this._hideErrors();
  }

  setBtnStateProgress() {
    this._submitButton.textContent = 'Сохранение...';
  }

  setBtnStateDefault() {
    this._submitButton.textContent = 'Сохранить';
  }

  _hideErrors() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  _setEventListeners() {
    this._setSubmitListener();
    this._setInputListener();
  }

  _setSubmitListener() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  _setInputListener() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  _setInputList() {
    this._inputList = Array.from(
      this._form.querySelectorAll( this._config.inputSelector )
    );
  }

  _setInputErrorList() {
    this._inputErrorList = [];
    this._inputList.forEach((input) => {
      this._inputErrorList[ input.id ] = this._form.querySelector(`.${input.id}-error`);
    });
  }

  _setSubmitButton() {
    this._submitButton = this._form.querySelector( this._config.submitButtonSelector );
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _disableButton() {
    this._submitButton.classList.add(this._config.inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableButton() {
    this._submitButton.classList.remove(this._config.inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hideInputError(input) {
    input.classList.remove(this._config.inputErrorClass);
    const errorElement = this._getFormInputError(input);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _showInputError(input, errorMessage) {
    input.classList.add(this._config.inputErrorClass);
    const errorElement = this._getFormInputError(input);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = errorMessage;
  }

  _getFormInputError(input) {
    return this._inputErrorList[ input.id ];
  }
}
