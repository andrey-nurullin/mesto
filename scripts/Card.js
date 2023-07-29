export default class Card {

  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  getView() {
    const cardNode = this._getCardElement();
    this._initCardButtons(cardNode);
    this._initOpenPhotoPopupBtn(cardNode);
    return cardNode;
  }

  _getCardElement() {
    const cardTemplate = document.querySelector(this._templateSelector).content;
    const cardElement = cardTemplate.cloneNode(true);
    const image = cardElement.querySelector('.cards-grid__card-photo');
    image.src = this._link;
    image.alt += ": " + this._name;
    cardElement.querySelector('.cards-grid__card-caption').textContent = this._name;
    return cardElement;
  }

  _initCardButtons(cardNode) {
    const likeBtn = cardNode.querySelector('.cards-grid__like-button');
    likeBtn.addEventListener('click', () => this._handleCardLike(likeBtn));

    const deleteBtn = cardNode.querySelector('.cards-grid__delete-button');
    deleteBtn.addEventListener('click', () => this._handleCardDelete(deleteBtn));
  }

  _handleCardLike(likeBtn) {
    likeBtn.classList.toggle('cards-grid__like-button_active');
  }

  _handleCardDelete(deleteBtn) {
    const cardNode = deleteBtn.closest('.cards-grid__card');
    cardNode.remove();
  }

  _initOpenPhotoPopupBtn(cardNode) {
    const photoButton = cardNode.querySelector('.cards-grid__card-photo');
    photoButton.addEventListener('click', () => this._handlePhotoBtnClick(cardNode));
  }

  _handlePhotoBtnClick(cardNode) {
    const photoBtnClick = new CustomEvent('photoclick', {
      detail: {
        name: this._name,
        link: this._link
      }
    });
    cardNode.dispatchEvent(photoBtnClick);
  }

}
