const Utils = require('./utils');
const sinon = require('sinon');
const {expect} = require('chai')

const spy = sinon.spy
const sendPaymentRequestToApi = require('./3-payment')
describe('sendPaymentRequestToApi', function() {
    afterEach(() => {
        // Restore the default sandbox here
        sinon.restore();
      });
    beforeEach(() => {
        // setup sinon

    })

    it('should call calculateNumber', function() {
        const calcNumSpy = spy(Utils, 'calculateNumber');
        const consoleSpy = spy(console, 'log');
        const requestResponse = sendPaymentRequestToApi(1, 2);
    
        expect(calcNumSpy.calledOnceWithExactly('SUM', 1, 2)).to.equal(true);
        expect(consoleSpy.calledWithExactly('The total is: 3')).to.equal(true);
        expect(Utils.calculateNumber('SUM', 1, 2)).to.equal(requestResponse);
    })
})