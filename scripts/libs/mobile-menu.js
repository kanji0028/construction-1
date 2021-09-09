class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.l-menu-sp-button');
    this.DOM.container = document.querySelector('.l-menu-sp-button');
    this.DOM.container2 = document.querySelector('.l-menu-sp');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }
  _toggle() {
    this.DOM.container.classList.toggle('-opened');
    this.DOM.container2.classList.toggle('-opened');
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
new MobileMenu();
