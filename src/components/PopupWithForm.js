import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => this._handleFormSubmit());
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
      this._form[key].value = value;
    })
  }

  getFormData() {
    const data = new FormData(this._form);
    return data;
  }

  getFormId() {
    return this._form.id;
  }

  //Пока неизвестно зачем, но в задании сказано, что должно быть
  _getInputValues() {
    return new FormData(this._form).values;
  }
}
