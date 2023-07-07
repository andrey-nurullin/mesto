function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function enableButton(button, inactiveButtonClass) {
  button.classList.remove(inactiveButtonClass);
  button.disable = false;
}

function disableButton(button, inactiveButtonClass) {
  button.classList.add(inactiveButtonClass);
  button.disable = true;
}

function toggleButtonState(inputList, button, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    disableButton(button, inactiveButtonClass);
  } else {
    enableButton(button, inactiveButtonClass);
  }
}

function getFormInputError(form, input) {
  return form.querySelector(`.${input.id}-error`);
}

function showInputError(form, input, cssSettings, errorMessage) {
  const errorElement = getFormInputError(form, input);
  input.classList.add(cssSettings.inputErrorClass);
  errorElement.classList.add(cssSettings.errorClass);
  errorElement.textContent = errorMessage;
}

function hideInputErrror(form, input, cssSettings) {
  const errorElement = getFormInputError(form, input);
  input.classList.remove(cssSettings.inputErrorClass);
  errorElement.classList.remove(cssSettings.errorClass);
  errorElement.textContent = '';
}

function checkInputValidity(form, input, cssSettings) {
  if (!input.validity.valid) {
    showInputError(form, input, cssSettings, input.validationMessage );
  } else {
    hideInputErrror(form, input, cssSettings);
  }
}

function getInputList(form, inputSelector) {
  return Array.from(form.querySelectorAll(inputSelector));
}

function getSubmitButton(form, submitButtonSelector) {
  return form.querySelector(submitButtonSelector);
}

function setEventListeners(form, cssSettings) {
  const inputList = getInputList(form, cssSettings.inputSelector);
  const submitButton = getSubmitButton(form, cssSettings.submitButtonSelector);
  toggleButtonState(inputList, submitButton, cssSettings.inactiveButtonClass);
  inputList.forEach((input) => {
    input.addEventListener('input', function() {
      checkInputValidity(form, input, cssSettings);
      toggleButtonState(inputList, submitButton, cssSettings.inactiveButtonClass);
    });
  });
}

function resetFormErrors(form, cssSettings) {
  const inputList = getInputList(form, cssSettings.inputSelector);
  inputList.forEach(
    (input) => hideInputErrror(form, input, cssSettings)
  );
}

function resetFormState(form, cssSettings) {
  resetFormErrors(form, cssSettings);
  disableButton(
    getSubmitButton(form, cssSettings.submitButtonSelector),
    cssSettings.inactiveButtonClass
  );
}

function isFormValid(form, cssSettings) {
  const inputList = getInputList(form, cssSettings.inputSelector);
  return !hasInvalidInput(inputList);
}

function enableValidation(cssSettings) {
  const formList = Array.from(document.querySelectorAll(cssSettings.formSelector))
  formList.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if ( (e.key = 'Enter') && (!isFormValid(form, cssSettings)) ) {
        e.stopImmediatePropagation();
      }
    });
    setEventListeners(form, cssSettings);
  });
}

export { enableValidation, resetFormState };
