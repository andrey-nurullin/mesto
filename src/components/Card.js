export default class Card {

  constructor(cardData, templateSelector, currentUserId, handleCardClick, handleDeleteClick) {
    this._id = cardData._id;
    this._name = cardData.name;
    this._link = cardData.link;
    this._isUserOwn = this._checkIsUserOwn(cardData, currentUserId);
    this._isLiked = this._checkIsLiked(cardData, currentUserId);
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._setCardNode(templateSelector);
    this._setEventListeners();
  }

  getView() {
    return this._cardNode;
  }

  getId() {
    return this._id;
  }

  remove() {
    this._cardNode.remove();
  }

  _checkIsUserOwn({owner}, currentUserId) {
    return (owner._id === currentUserId)
  }

  _checkIsLiked({likes}, currentUserId) {
    return likes.some(
      user => (user._id === currentUserId)
    );
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleCardLike());
    this._image.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    if (this._deleteBtn) {
      this._deleteBtn.addEventListener('click', () => this._handleDeleteClick(this));
    }
  }

  _setCardNode(templateSelector) {
    const cardTemplate = document.querySelector(templateSelector)
      .content
      .querySelector('.cards-grid__card');
    this._cardNode = cardTemplate.cloneNode(true);
    this._setCardNodeElements();
  }

  _setCardNodeElements() {
    this._image = this._cardNode.querySelector('.cards-grid__card-photo');
    this._image.src = this._link;
    this._image.alt += ": " + this._name;

    const cardCaption = this._cardNode.querySelector('.cards-grid__card-caption')
    cardCaption.textContent = this._name;

    this._likeBtn = this._cardNode.querySelector('.cards-grid__like-button');
    if (this._isLiked) {
      this._handleCardLike();
    }

    const deleteBtn = this._cardNode.querySelector('.cards-grid__delete-button');
    if (this._isUserOwn) {
      this._deleteBtn = deleteBtn;
    } else {
      deleteBtn.remove();
    }
  }

  _handleCardLike() {
    this._likeBtn.classList.toggle('cards-grid__like-button_active');
  }

}
