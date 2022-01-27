const assert = require('assert');
const calc = require('./1-calcul');


describe('Calucate Number', function () {
    describe('Test Sum', function() {
        it("should return sume of two integers", function() {
            assert.equal(calc('SUM', 1, 2), 3);
        });
        it("should round the first number and add it", function() {
            assert.equal(calc('SUM', 1.7, 1), 3);
            assert.notEqual(calc('SUM', 1.8, 2), 3.8);
            assert.equal(calc('SUM', 1, 2), 3);
        })
        it("should round the second number and add it", function() {
            assert.equal(calc('SUM', 1, 1.7), 3);
            assert.equal(calc('SUM', 2, 1), 3);
        })
        it("should round return an integer sum", function() {
            assert.equal(calc('SUM', 1.3, 1.7), 3);
            assert.notStrictEqual(calc('SUM', 2.6, 2.6), 5.2);
        })
        it("both number should round to upper", function() {
            assert.equal(calc('SUM', 1.7, 1.7), 4);
        })
        it("both number should round to down", function() {
            assert.equal(calc('SUM', 1.7, 1.7), 4);
        })
    })
    describe('Test Subtract', function() {
        it("should return subtraction of b frow a two integers", function() {
            assert.equal(calc('SUBTRACT', 4, 3), 1);
        });
        it("should round the first number subtraction of b frow a", function() {
            assert.equal(calc('SUBTRACT', 1.7, 1), 1);
        })
        it("should round the second number and subtract it", function() {
            assert.equal(calc('SUBTRACT', 1, 1.7), -1);
        })
        it("should round return an integer sum", function() {
            assert.equal(calc('SUBTRACT', 1.3, 1.7), -1);
        })
        it("both number should round to upper", function() {
            assert.equal(calc('SUBTRACT', 1.7, 1.7), 0);
        })
        it("both number should round to down", function() {
            assert.equal(calc('SUBTRACT', 1.7, 1.7), 0);
        })
        it("b is greate than a", function() {
            assert.equal(calc('SUBTRACT', 1.7, 2.7), -1);
        })
    })
    describe('Test Division', function() {
        it("should return subtraction of b frow a two integers", function() {
            assert.equal(calc('DIVISION', 6, 3), 2);
        });
        it("should round the first number divide of b frow a", function() {
            assert.equal(calc('DIVISION', 1.7, 1), 2);
        })
        it("should round the second number and divide it", function() {
            assert.equal(calc('DIVISION', 2, 1.7), 1);
        })
        it("should round return an integer division", function() {
            assert.equal(calc('DIVISION', 1.9, 1), 2);
        })
        it("division by zero returns Error message", function() {
            assert.equal(calc('DIVISION', 1.7, 0.4), "Error");
        })
    })
})