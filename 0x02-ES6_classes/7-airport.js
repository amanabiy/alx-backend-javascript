/* eslint-disable no-underscore-dangle */
const util = require('util');

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this.code}]`;
  }

  [util.inspect.custom]() {
    return `${this.constructor.name} [${this.code}] { _name: '${this.name}', _code: '${this.code}' }`;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
