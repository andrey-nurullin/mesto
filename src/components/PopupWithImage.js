import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.img-with-caption__full-img');
    this._elementCaption = this._popup.querySelector('.img-with-caption__caption');
  }

  open(imageCaption, imageLink) {
    this._elementCaption.textContent = imageCaption;
    this._image.src = imageLink;
    this._image.alt = imageCaption;
    this._image.onload = () => {
      super.open();
    }
  }

}
