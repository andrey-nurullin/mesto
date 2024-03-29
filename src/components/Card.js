export default class Card {

  constructor({name, link, _id, owner, likes}, templateSelector, currentUserId, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._id = _id;
    this._name = name;
    this._link = link;
    this._currentUserId = currentUserId;
    this._isUserOwn = this._checkIsUserOwn(owner);
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._setLikeParameters(likes);
    this._setCardNode(templateSelector);
    this._setEventListeners();
  }

  getView() {
    return this._cardNode;
  }

  getId() {
    return this._id;
  }

  getIsLiked() {
    return this._isLiked;
  }

  remove() {
    this._cardNode.remove();
  }

  updateLikeStatus({likes}) {
    this._setLikeParameters(likes);
    this._updateLikeSection();
  }

  /**
   * @param {Array} likes
   */
  _setLikeParameters(likes) {
    this._isLiked = this._checkIsLiked(likes);
    this._likeCount = likes.length;
  }

  /**
   * @param {Array} likes
   * @returns {Boolean}
   */
  _checkIsLiked(likes) {
    return likes.some(
      user => (user._id === this._currentUserId)
    );
  }

  _checkIsUserOwn(owner) {
    return (owner._id === this._currentUserId)
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleLikeClick(this));
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
    this._likeCounter = this._cardNode.querySelector('.cards-grid__like-counter');
    this._updateLikeSection();

    const deleteBtn = this._cardNode.querySelector('.cards-grid__delete-button');
    if (this._isUserOwn) {
      this._deleteBtn = deleteBtn;
    } else {
      deleteBtn.remove();
    }
  }

  _updateLikeSection() {
    this._renderLikeButton();
    this._updateLikeCounter();
  }

  _renderLikeButton() {
    if (this._isLiked) {
      this._likeBtn.classList.add('cards-grid__like-button_active');
    } else {
      this._likeBtn.classList.remove('cards-grid__like-button_active');
    }
  }

  _updateLikeCounter() {
    this._likeCounter.textContent = this._likeCount;
  }

}
