const chai = require('chai');
const { expect } = require('chai');

const ConvertBTC = require('../src/ConvertBTC');

describe('ConverterBTC', () => {
  it('should return USD as currency and 1 as amount default', () => {
    expect(ConvertBTC()).to.be.equal('USD BTC to 1 = 2000.00');
  });

  it('should return BLR as currency and 10 as amount when defined', () => {
    expect(ConvertBTC('BLR', 10)).to.be.equal('BLR BTC to 10 = 2000.00');
  });
});
