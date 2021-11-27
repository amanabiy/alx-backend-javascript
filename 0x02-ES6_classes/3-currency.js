/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._code = code;
    this._name = name;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
