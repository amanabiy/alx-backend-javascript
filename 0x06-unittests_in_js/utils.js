const Utils = {
    calculateNumber(type, a, b=0) {
        num1 = Math.round(a);
        num2 = Math.round(b);
    
        if (Number.isNaN(num1) || Number.isNaN(num2))
          throw TypeError('please insert a number');

        switch (type) {
            case 'SUM':
              return num1 + num2;
            case 'SUBTRACT':
              return num1 - num2;
            case 'DIVIDE':
              if (num2 === 0) return 'ERROR';
              quotient = num1 / num2;
              return this.isNegZero(quotient) ? 0 : quotient;
            default:
              throw Error(
                'Operation must be either "SUM", "SUBTRACT", and "DIVIDE".'
              );
        }
    }
}

module.exports = Utils
