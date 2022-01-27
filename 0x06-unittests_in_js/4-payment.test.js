const Utils = require('./utils');
const {spy, stub} = require('sinon');
const {expect} = require('chai')

const sendPaymentRequestToApi = require('./3-payment')
describe('sendPaymentRequestToApi', function() {

    it('should call calculateNumber stubs', function() {
        const consoleSpy = spy(console, 'log');
        const calcStub = stub(Utils, "calculateNumber").returns(10);
        const requestResponse = sendPaymentRequestToApi(100, 20);

        expect(calcStub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
        expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(requestResponse);
        expect(consoleSpy.calledWithExactly('The total is: 10')).to.equal(true);

        calcStub.restore();
        consoleSpy.restore();
    })
})