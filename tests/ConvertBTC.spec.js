const nock = require('nock');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const chai = require('chai');

const { expect } = require('chai');

const ConvertBTC = require('../src/ConvertBTC');

chai.use(sinonChai);

describe('ConverterBTC', () => {
  let consoleStub;

  const responseMock = {
    success: true,
    time: '2020-07-26 13:09:45',
    price: 2490.75,
  };

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should use currency USD and 1 as amount default', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({
        from: 'BTC',
        to: 'USD',
        amount: 1,
      })
      .reply(200, responseMock);

    ConvertBTC();

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('1 BTC to USD = 2490.75');
      done();
    }, 300);
  });

  it('should use currency USD and 10 as amount', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({
        from: 'BTC',
        to: 'BLR',
        amount: 10,
      })
      .reply(200, responseMock);

    ConvertBTC({ currency: 'BLR', amount: 10 });

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('10 BTC to BLR = 2490.75');
      done();
    }, 300);
  });
});
