export default class Api {

  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return this._doRequest('/users/me');
  }

  setUserInfo(data) {
    return this._doRequest('/users/me', 'PATCH', data);
  }

  getInitialCards() {
    return this._doRequest('/cards');
  }

  /**
   * @param {String} dataUrl Url path to requested data
   * @param {String} method
   * @param {JSON} data
   * @returns
   */
  _doRequest(dataUrl, method, data) {
    return fetch(this._baseUrl + dataUrl, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Error status: ${response.status}`));
    })
  }
}
