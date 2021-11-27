/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be a Currency');
    this.amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be a Currency');
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
