export default class Card {

  constructor({name, link}, templateSelector, handlePhotoClick) {
    this._name = name;
    this._link = link;
    this._handlePhotoClick = handlePhotoClick;
    this._cardNode = this._getCardNode(templateSelector);
    this._setEventListeners();
  }

  getView() {
    return this._cardNode;
  }

  _setEventListeners() {
    const likeBtn = this._cardNode.querySelector('.cards-grid__like-button');
    likeBtn.addEventListener('click', () => this._handleCardLike(likeBtn));

    const deleteBtn = this._cardNode.querySelector('.cards-grid__delete-button');
    deleteBtn.addEventListener('click', () => this._handleCardDelete(deleteBtn));

    const photoButton = this._cardNode.querySelector('.cards-grid__card-photo');
    photoButton.addEventListener('click', () => this._handlePhotoClick(this._name, this._link));
  }

  _getCardNode(templateSelector) {
    const cardTemplate = document.querySelector(templateSelector).content;
    const cardElement = cardTemplate.cloneNode(true);
    const image = cardElement.querySelector('.cards-grid__card-photo');
    image.src = this._link;
    image.alt += ": " + this._name;
    cardElement.querySelector('.cards-grid__card-caption').textContent = this._name;
    return cardElement;
  }

  _handleCardLike(likeBtn) {
    likeBtn.classList.toggle('cards-grid__like-button_active');
  }

  _handleCardDelete(deleteBtn) {
    const cardNode = deleteBtn.closest('.cards-grid__card');
    cardNode.remove();
  }

  _handlePhotoBtnClick() {

  }

}
