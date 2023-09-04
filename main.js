(()=>{"use strict";var t={baseUrl:"https://mesto.nomoreparties.co/v1/".concat("cohort-74"),headers:{authorization:"ea1b6130-dab4-493a-93c8-8c94cc2df993","Content-Type":"application/json"}},e={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".button",inactiveButtonClass:"button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"},n={progressSave:"Сохранение...",progressDelete:"Удаление..."};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;this._clear(),t.forEach((function(t){e._renderer(t)}))}},{key:"_clear",value:function(){this._container.innerHTML=""}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var s=function(){function t(e,n,r,o,i,u){var a=e.name,s=e.link,c=e._id,l=e.owner,f=e.likes;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=c,this._name=a,this._link=s,this._currentUserId=r,this._isUserOwn=this._checkIsUserOwn(l),this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=u,this._setLikeParameters(f),this._setCardNode(n),this._setEventListeners()}var e,n;return e=t,(n=[{key:"getView",value:function(){return this._cardNode}},{key:"getId",value:function(){return this._id}},{key:"getIsLiked",value:function(){return this._isLiked}},{key:"remove",value:function(){this._cardNode.remove()}},{key:"updateLikeStatus",value:function(t){var e=t.likes;this._setLikeParameters(e),this._updateLikeSection()}},{key:"_setLikeParameters",value:function(t){this._isLiked=this._checkIsLiked(t),this._likeCount=t.length}},{key:"_checkIsLiked",value:function(t){var e=this;return t.some((function(t){return t._id===e._currentUserId}))}},{key:"_checkIsUserOwn",value:function(t){return t._id===this._currentUserId}},{key:"_setEventListeners",value:function(){var t=this;this._likeBtn.addEventListener("click",(function(){return t._handleLikeClick(t)})),this._image.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)})),this._deleteBtn&&this._deleteBtn.addEventListener("click",(function(){return t._handleDeleteClick(t)}))}},{key:"_setCardNode",value:function(t){var e=document.querySelector(t).content.querySelector(".cards-grid__card");this._cardNode=e.cloneNode(!0),this._setCardNodeElements()}},{key:"_setCardNodeElements",value:function(){this._image=this._cardNode.querySelector(".cards-grid__card-photo"),this._image.src=this._link,this._image.alt+=": "+this._name,this._cardNode.querySelector(".cards-grid__card-caption").textContent=this._name,this._likeBtn=this._cardNode.querySelector(".cards-grid__like-button"),this._likeCounter=this._cardNode.querySelector(".cards-grid__like-counter"),this._updateLikeSection();var t=this._cardNode.querySelector(".cards-grid__delete-button");this._isUserOwn?this._deleteBtn=t:t.remove()}},{key:"_updateLikeSection",value:function(){this._renderLikeButton(),this._updateLikeCounter()}},{key:"_renderLikeButton",value:function(){this._isLiked?this._likeBtn.classList.add("cards-grid__like-button_active"):this._likeBtn.classList.remove("cards-grid__like-button_active")}},{key:"_updateLikeCounter",value:function(){this._likeCounter.textContent=this._likeCount}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=e,this._config=n,this._setSubmitButton(),this._setInputList(),this._setInputErrorList()}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){this._toggleButtonState(),this._hideErrors()}},{key:"setBtnStateProgress",value:function(t){this._submitButton.textContent=t}},{key:"setBtnStateDefault",value:function(){this._submitButton.textContent=this._btnDefaultCaption}},{key:"_hideErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){this._setSubmitListener(),this._setInputListener()}},{key:"_setSubmitListener",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()}))}},{key:"_setInputListener",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_setInputList",value:function(){this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector))}},{key:"_setInputErrorList",value:function(){var t=this;this._inputErrorList=[],this._inputList.forEach((function(e){t._inputErrorList[e.id]=t._form.querySelector(".".concat(e.id,"-error"))}))}},{key:"_setSubmitButton",value:function(){this._submitButton=this._form.querySelector(this._config.submitButtonSelector),this._btnDefaultCaption=this._submitButton.textContent}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._config.inactiveButtonClass),this._submitButton.disabled=!1}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hideInputError",value:function(t){t.classList.remove(this._config.inputErrorClass);var e=this._getFormInputError(t);e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_showInputError",value:function(t,e){t.classList.add(this._config.inputErrorClass);var n=this._getFormInputError(t);n.classList.add(this._config.errorClass),n.textContent=e}},{key:"_getFormInputError",value:function(t){return this._inputErrorList[t.id]}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._setEscClosingHandlers()}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._setClosingEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._unsetClosingEventListeners()}},{key:"setEventListeners",value:function(t,e){t&&e&&document.querySelector(t).addEventListener("click",e),this._setClosingButton(),this._setClosingOverlay()}},{key:"_setClosingButton",value:function(){var t=this;this._closeBtn=this._popup.querySelector(".popup__close-button"),this._closeBtn.addEventListener("click",(function(){return t.close()}))}},{key:"_setClosingOverlay",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.target===e.currentTarget&&t.close()}))}},{key:"_setFocus",value:function(){this._popup.focus()}},{key:"_setEscClosingHandlers",value:function(){this._setFocusHandler=this._handleSetFocus.bind(this),this._escCloseHandler=this._handleEscClose.bind(this)}},{key:"_setClosingEventListeners",value:function(){this._popup.addEventListener("transitionend",this._setFocusHandler),this._popup.addEventListener("keydown",this._escCloseHandler)}},{key:"_unsetClosingEventListeners",value:function(){this._popup.removeEventListener("transitionend",this._setFocusHandler),this._popup.removeEventListener("keydown",this._escCloseHandler)}},{key:"_handleSetFocus",value:function(t){t.target===t.currentTarget&&"visibility"===t.propertyName&&this._setFocus()}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(o){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".img-with-caption__full-img"),e._elementCaption=e._popup.querySelector(".img-with-caption__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){var n=this;this._elementCaption.textContent=t,this._image.src=e,this._image.alt=t,this._image.onload=function(){b(m(u.prototype),"open",n).call(n)}}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=i.call.apply(i,[this].concat(n)))._form=t._popup.querySelector(".form"),t}return e=u,n=[{key:"setSubmitHandler",value:function(t){this._handleFormSubmit=t}},{key:"setEventListeners",value:function(){for(var t,e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];(t=w(O(u.prototype),"setEventListeners",this)).call.apply(t,[this].concat(r)),this._form.addEventListener("submit",(function(){return e._handleFormSubmit()}))}},{key:"getFormId",value:function(){return this._form.id}}],n&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}(this,t)});function u(t,e){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),B((n=I(r=i.call(this,t)),R(u.prototype)),"setSubmitHandler",n).call(n,e),r}return e=u,(n=[{key:"close",value:function(){B(R(u.prototype),"close",this).call(this),this.resetForm()}},{key:"resetForm",value:function(){this._form.reset()}},{key:"setFormData",value:function(t){var e=this;t.forEach((function(t,n){e._form[n]&&(e._form[n].value=t)}))}},{key:"getFormData",value:function(){return new FormData(this._form)}},{key:"getDataAsObject",value:function(){var t=this.getFormData();return Object.fromEntries(t.entries())}},{key:"_getInputValues",value:function(){return new FormData(this._form).values()}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(j);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var D=function(){function t(e){var n=e.selectorName,r=e.selectorAbout,o=e.selectorAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._elementName=document.querySelector(n),this._elementAbout=document.querySelector(r),this._avatarImage=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){var t=new FormData;return t.append("name",this._elementName.textContent),t.append("about",this._elementAbout.textContent),t.append("_id",this._id),t}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._setName(e),this._setAbout(n),this._setAvatar(r),this._setId(o)}},{key:"_setName",value:function(t){this._elementName.textContent=t}},{key:"_setAbout",value:function(t){this._elementAbout.textContent=t}},{key:"_setAvatar",value:function(t){this._avatarImage.src=t}},{key:"_setId",value:function(t){this._id=t}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}var N=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._doRequest("/users/me")}},{key:"setUserInfo",value:function(t){return this._doRequest("/users/me","PATCH",t)}},{key:"getInitialCards",value:function(){return this._doRequest("/cards")}},{key:"addCard",value:function(t){return this._doRequest("/cards","POST",t)}},{key:"deleteCard",value:function(t){return this._doRequest("/cards/".concat(t),"DELETE")}},{key:"likeCard",value:function(t){return this._doRequest("/cards/".concat(t,"/likes"),"PUT")}},{key:"unlikeCard",value:function(t){return this._doRequest("/cards/".concat(t,"/likes"),"DELETE")}},{key:"updateAvatar",value:function(t){return this._doRequest("/users/me/avatar","PATCH",t)}},{key:"_doRequest",value:function(t,e,n){return fetch(this._baseUrl+t,{method:e,headers:this._headers,body:JSON.stringify(n)}).then((function(t){return t.ok?t.json():Promise.reject("Api error with status ".concat(t.status))}))}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function H(t){W[t.getFormId()].resetValidation()}function V(t,e){W[t.getFormId()].setBtnStateProgress(e)}function M(t){W[t.getFormId()].setBtnStateDefault()}function z(t){var e=new s(t,"#card",Q.getUserInfo().get("_id"),X.open.bind(X),$,J).getView();nt.addItem(e)}function J(t){var e=t.getId();(t.getIsLiked()?rt.unlikeCard(e):rt.likeCard(e)).then((function(e){return t.updateLikeStatus(e)})).catch(G)}function $(t){et.open(),et.setSubmitHandler((function(){V(et,n.progressDelete),rt.deleteCard(t.getId()).then((function(){t.remove(),M(et),et.close()})).catch(G)}))}function G(t){console.log(t)}var K,Q=new D({selectorName:".profile__title",selectorAbout:".profile__subtitle",selectorAvatar:".profile__avatar"}),W=[];K=W,Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var n=new f(t,e);n.enableValidation(),K[t.id]=n}));var X=new g("#popup-full-photo");X.setEventListeners();var Y=new T("#popup-profile",(function(){var t=Y.getFormData(),e=Object.fromEntries(t.entries());V(Y,n.progressSave),rt.setUserInfo(e).then((function(t){Q.setUserInfo(t),M(Y),Y.close()})).catch(G)}));Y.setEventListeners(".profile__edit-button",(function(){var t=Q.getUserInfo();Y.setFormData(t),H(Y),Y.open()}));var Z=new T("#popup-add-card",(function(){var t=Z.getDataAsObject();V(Z,n.progressSave),rt.addCard(t).then((function(t){z(t),M(Z),Z.close()})).catch(G)}));Z.setEventListeners(".profile__add-card-button",(function(){Z.resetForm(),H(Z),Z.open()}));var tt=new T("#popup-avatar-edit",(function(){var t=tt.getDataAsObject();V(tt,n.progressSave),rt.updateAvatar(t).then((function(t){Q.setUserInfo(t),M(tt),tt.close()})).catch(G)}));tt.setEventListeners(".profile__avatar-edit-button",(function(){tt.resetForm(),H(tt),tt.open()}));var et=new j("#popup-confirmation");et.setEventListeners();var nt=new i(z,".cards-grid"),rt=new N(t);Promise.all([rt.getUserInfo(),rt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],s=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);s=!0);}catch(t){c=!0,o=t}finally{try{if(!s&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q.setUserInfo(o),nt.renderItems(i.reverse())})).catch(G)})();