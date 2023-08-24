export default class UserInfo {

  constructor({selectorName, selectorAbout}) {
    this._elementName = document.querySelector(selectorName);
    this._elementAbout = document.querySelector(selectorAbout);
  }

  getUserInfo() {
    const userData = new FormData();
    userData.append('name', this._elementName.textContent);
    userData.append('about', this._elementAbout.textContent);
    return userData;
  }

  /**
   * @param {FormData} userData
   */
  setUserInfo(userData) {
    this._setName(userData.get('name'));
    this._setAbout(userData.get('about'));
  }

  _setName(name) {
    this._elementName.textContent = name;
  }

  _setAbout(about) {
    this._elementAbout.textContent = about;
  }
}
