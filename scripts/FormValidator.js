export default class FormValidator {

  constructor(form, config) {
    this._form = form;
    this._config = config;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._setSubmitListener();
    this._setInputListener();
  }

  _setSubmitListener() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      if ( (e.key = 'Enter') && (!this._isFormValid()) ) {
        e.stopImmediatePropagation();
      }
    });
  }

  _setInputListener() {
    const inputList = this._getInputList();
    const submitButton = this._getSubmitButton();
    this._toggleButtonState(inputList, submitButton);
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputList, submitButton);
      });
    });
  }

  _getInputList() {
    return Array.from(
      this._form.querySelectorAll( this._config.inputSelector )
    );
  }

  _getSubmitButton() {
    return this._form.querySelector( this._config.submitButtonSelector );
  }

  _toggleButtonState(inputList, button) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(button);
    } else {
      this._enableButton(button);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _disableButton(button) {
    button.classList.add(this._config.inactiveButtonClass);
    button.disable = true;
  }

  _enableButton(button) {
    button.classList.remove(this._config.inactiveButtonClass);
    button.disable = false;
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hideInputError(input) {
    const errorElement = this._getFormInputError(input);
    input.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._getFormInputError(input);
    input.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = errorMessage;
  }

  _getFormInputError(input) {
    return this._form.querySelector(`.${input.id}-error`);
  }

  _isFormValid() {
    const inputList = this._getInputList();
    return !this._hasInvalidInput(inputList);
  }
}
