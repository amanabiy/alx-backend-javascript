const assert = require('assert');
const calc = require('./2-calcul_chai');
const chai = require('chai')
const expect = chai.expect


describe('Calucate Number', function () {
    describe('Test Sum', function() {
        it("should return sume of two integers", function() {
            expect(calc('SUM', 1, 2)).to.equal(3);
        });
        it("should round the first number and add it", function() {
            expect(calc('SUM', 1.7, 1)).to.equal(3);
        })
        it("should round the second number and add it", function() {
            expect(calc('SUM', 1, 1.7)).to.equal(3);
            expect(calc('SUM', 2, 1)).to.equal(3);
        })
        it("should round return an integer sum", function() {
            expect(calc('SUM', 1.3, 1.7)).to.equal(3);
        })
        it("both number should round to upper", function() {
            expect(calc('SUM', 1.7, 1.7)).to.equal(4);
        })
        it("both number should round to down", function() {
            expect(calc('SUM', 1.7, 1.7)).to.equal(4);
        })
    })
    describe('Test Subtract', function() {
        it("should return subtraction of b frow a two integers", function() {
            expect(calc('SUBTRACT', 4, 3)).to.equal(1);
        });
        it("should round the first number subtraction of b frow a", function() {
            expect(calc('SUBTRACT', 1.7, 1)).to.equal(1);
        })
        it("should round the second number and subtract it", function() {
            expect(calc('SUBTRACT', 1, 1.7)).to.equal(-1);
        })
        it("should round return an integer sum", function() {
            expect(calc('SUBTRACT', 1.3, 1.7)).to.equal(-1);
        })
        it("both number should round to upper", function() {
            expect(calc('SUBTRACT', 1.7, 1.7)).to.equal(0);
        })
        it("both number should round to down", function() {
            expect(calc('SUBTRACT', 1.7, 1.7)).to.equal(0);
        })
        it("b is greate than a", function() {
            expect(calc('SUBTRACT', 1.7, 2.7)).to.equal(-1);
        })
    })
    describe('Test Division', function() {
        it("should return subtraction of b frow a two integers", function() {
            expect(calc('DIVISION', 6, 3)).to.equal(2);
        });
        it("should round the first number divide of b frow a", function() {
            expect(calc('DIVISION', 1.7, 1)).to.equal(2);
        })
        it("should round the second number and divide it", function() {
            expect(calc('DIVISION', 2, 1.7)).to.equal(1);
        })
        it("should round return an integer division", function() {
            expect(calc('DIVISION', 1.9, 1)).to.equal(2);
        })
        it("division by zero returns Error message", function() {
            expect(calc('DIVISION', 1.7, 0.4)).to.equal("Error");
        })
    })
})