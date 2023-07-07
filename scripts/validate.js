function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButtonState(inputList, button, cssSettings) {
  if (hasInvalidInput(inputList)) {
    button.classList.add(cssSettings.inactiveButtonClass);
  } else {
    button.classList.remove(cssSettings.inactiveButtonClass);
  }
}

function showInputError(form, input, errorMessage, cssSettings) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add(cssSettings.inputErrorClass);
  errorElement.classList.add(cssSettings.errorClass);
  errorElement.textContent = errorMessage;
}

function hideInputErrror(form, input, cssSettings) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(cssSettings.inputErrorClass);
  errorElement.classList.remove(cssSettings.errorClass);
  errorElement.textContent = '';
}

function checkInputValidity(form, input, cssSettings) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, cssSettings);
  } else {
    hideInputErrror(form, input, cssSettings);
  }
}

function setEventListeners(form, cssSettings) {
  const inputList = Array.from(form.querySelectorAll(cssSettings.inputSelector));
  const submitButton = form.querySelector(cssSettings.submitButtonSelector);
  toggleButtonState(inputList, submitButton, cssSettings);
  inputList.forEach((input) => {
    input.addEventListener('input', function() {
      checkInputValidity(form, input, cssSettings);
      toggleButtonState(inputList, submitButton, cssSettings);
    });
  });
}

function enableValidation(cssSettings) {
  const formList = Array.from(document.querySelectorAll(cssSettings.formSelector))
  formList.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    setEventListeners(form, cssSettings);
  });
}

export { enableValidation };
