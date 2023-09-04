import PopupWithConfirmation from './PopupWithConfirmation.js';

export default class PopupWithForm extends PopupWithConfirmation {

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    super.setSubmitHandler(handleFormSubmit);
  }

  close() {
    super.close();
    this.resetForm();
  }

  resetForm() {
    this._form.reset();
  }

  /**
   * @param {FormData} formData
   */
  setFormData(formData) {
    formData.forEach((value, key) =>  {
      if (this._form[key]) {
        this._form[key].value = value;
      }
    })
  }

  getFormData() {
    return new FormData(this._form);
  }

  getDataAsObject() {
    const data = this.getFormData();
    return Object.fromEntries( data.entries() );
  }

  //Пока неизвестно зачем, но в задании сказано, что должно быть
  _getInputValues() {
    return new FormData(this._form).values();
  }
}
