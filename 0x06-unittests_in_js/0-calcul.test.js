const assert = require('assert')
const calc = require('./0-calcul')

describe("calculateNumber", function () {
    it("should return sume of two integers", function() {
        assert.equal(calc(1, 2), 3);
    });
    it("should round the first number and add it", function() {
        assert.equal(calc(1.7, 1), 3);
        assert.notEqual(calc(1.8, 2), 3.8);
        assert.equal(calc(1, 2), 3);
    })
    it("should round the second number and add it", function() {
        assert.equal(calc(1, 1.7), 3);
        assert.equal(calc(2, 1), 3);
    })
    it("should round return an integer sum", function() {
        assert.equal(calc(1.3, 1.7), 3);
        assert.notStrictEqual(calc(2.6, 2.6), 5.2);
    })
    it("both number should round to upper", function() {
        assert.equal(calc(1.7, 1.7), 4);
    })
    it("both number should round to down", function() {
        assert.equal(calc(1.7, 1.7), 4);
    })
});