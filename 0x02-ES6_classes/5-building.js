/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number');
  }

  get sqft() {
    return this._sqft;
  }
}
