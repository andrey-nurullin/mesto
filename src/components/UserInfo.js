export default class UserInfo {

  constructor({selectorName, selectorAbout, selectorAvatar}) {
    this._elementName = document.querySelector(selectorName);
    this._elementAbout = document.querySelector(selectorAbout);
    this._avatarImage = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    const userData = new FormData();
    userData.append('name', this._elementName.textContent);
    userData.append('about', this._elementAbout.textContent);
    userData.append('_id', this._id);
    return userData;
  }

  setUserInfo({name, about, avatar, _id}) {
    this._setName(name);
    this._setAbout(about);
    this._setAvatar(avatar);
    this._setId(_id);
  }

  _setName(name) {
    this._elementName.textContent = name;
  }

  _setAbout(about) {
    this._elementAbout.textContent = about;
  }

  _setAvatar(url) {
    this._avatarImage.src = url;
  }

  _setId(id) {
    this._id= id;
  }
}
