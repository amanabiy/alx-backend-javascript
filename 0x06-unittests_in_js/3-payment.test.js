const Utils = require('./utils');
const {spy} = require('sinon');
const {expect} = require('chai')

const sendPaymentRequestToApi = require('./3-payment')
describe('sendPaymentRequestToApi', function() {

    it('should call calculateNumber', function() {
        const calcNumSpy = spy(Utils, 'calculateNumber');
        const consoleSpy = spy(console, 'log');
        const requestResponse = sendPaymentRequestToApi(100, 20);
    
        expect(calcNumSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
        expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
        expect(Utils.calculateNumber('SUM', 100, 20).to.equal(requestResponse);
        calcNumSpy.restore();
        consoleSpy.restore();
    })
})