export default class Card {

  constructor({name, link, _id}, templateSelector, handleCardClick) {
    this._id = _id;
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._setCardNode(templateSelector);
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

    this._image.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  _setCardNode(templateSelector) {
    const cardTemplate = document.querySelector(templateSelector).content;
    this._cardNode = cardTemplate.cloneNode(true);
    this._image = this._cardNode.querySelector('.cards-grid__card-photo');
    this._image.src = this._link;
    this._image.alt += ": " + this._name;
    this._cardNode.querySelector('.cards-grid__card-caption').textContent = this._name;
  }

  _handleCardLike(likeBtn) {
    likeBtn.classList.toggle('cards-grid__like-button_active');
  }

  _handleCardDelete(deleteBtn) {
    const cardNode = deleteBtn.closest('.cards-grid__card');
    cardNode.remove();
  }
}
