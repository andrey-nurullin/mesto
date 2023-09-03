export default class Api {

  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return this._getData('/users/me');
  }

  getInitialCards() {
    return this._getData('/cards');
  }

  /**
   * @param {String} dataUrl Path to requested data
   * @returns {Promise}
   */
  _getData(dataUrl) {
    return fetch(this._baseUrl + dataUrl, {
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Error status: ${response.status}`));
    })
  }

  // другие методы работы с API
}
