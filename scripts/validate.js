let cssSettings = null;

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function enableButton(button) {
  button.classList.remove(cssSettings.inactiveButtonClass);
}

function disableButton(button) {
  button.classList.add(cssSettings.inactiveButtonClass);
}

function toggleButtonState(inputList, button) {
  if (hasInvalidInput(inputList)) {
    disableButton(button);
  } else {
    enableButton(button);
  }
}

function getFormInputError(form, input) {
  return form.querySelector(`.${input.id}-error`);
}

function showInputError(form, input, errorMessage) {
  const errorElement = getFormInputError(form, input);
  input.classList.add(cssSettings.inputErrorClass);
  errorElement.classList.add(cssSettings.errorClass);
  errorElement.textContent = errorMessage;
}

function hideInputErrror(form, input) {
  const errorElement = getFormInputError(form, input);
  input.classList.remove(cssSettings.inputErrorClass);
  errorElement.classList.remove(cssSettings.errorClass);
  errorElement.textContent = '';
}

function checkInputValidity(form, input) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputErrror(form, input);
  }
}

function getInputList(form) {
  return Array.from(form.querySelectorAll(cssSettings.inputSelector));
}

function getSubmitButton(form) {
  return form.querySelector(cssSettings.submitButtonSelector);
}

function setEventListeners(form) {
  const inputList = getInputList(form);
  const submitButton = getSubmitButton(form);
  toggleButtonState(inputList, submitButton);
  inputList.forEach((input) => {
    input.addEventListener('input', function() {
      checkInputValidity(form, input);
      toggleButtonState(inputList, submitButton);
    });
  });
}

function resetFormErrors(form) {
  const inputList = getInputList(form);
  inputList.forEach((input) => hideInputErrror(form, input));
}

function resetFormState(form) {
  resetFormErrors(form);
  disableButton( getSubmitButton(form) );
}

function handleValidation(form) {
  const inputList = getInputList(form);
  const submitButton = getSubmitButton(form);
  toggleButtonState(inputList, submitButton);
  getInputList(form).forEach(
    (input) => checkInputValidity(form, input)
  );
}

function enableValidation(cssFormData) {
  cssSettings = cssFormData;
  const formList = Array.from(document.querySelectorAll(cssSettings.formSelector))
  formList.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    setEventListeners(form);
  });
}

export { enableValidation, handleValidation, resetFormState };
