import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.form');
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

  getFormId() {
    return this._form.id;
  }

  setEventListeners(...args) {
    super.setEventListeners(...args);
    this._form.addEventListener('submit', () => this._handleFormSubmit());
  }

  //Пока неизвестно зачем, но в задании сказано, что должно быть
  _getInputValues() {
    return new FormData(this._form).values();
  }
}
