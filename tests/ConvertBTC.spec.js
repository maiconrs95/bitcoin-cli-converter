const nock = require('nock');
const chalk = require('chalk');
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
    consoleStub = sinon.stub(console, 'info');
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it('should use currency USD and 1 as amount default', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({
        from: 'BTC',
        to: 'USD',
        amount: 1,
      })
      .reply(200, responseMock);

    await ConvertBTC();

    expect(consoleStub)
      .to
      .have
      .been
      .calledWith(
        `${chalk.red(1)} BTC to ${chalk.cyan('USD')} = ${chalk.yellow(2490.75)}`,
      );
  });

  it('should use currency USD and 10 as amount', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({
        from: 'BTC',
        to: 'BLR',
        amount: 10,
      })
      .reply(200, responseMock);

    await ConvertBTC({ currency: 'BLR', amount: 10 });

    expect(consoleStub)
      .to
      .have
      .been
      .calledWith(
        `${chalk.red(10)} BTC to ${chalk.cyan('BLR')} = ${chalk.yellow(2490.75)}`,
      );
  });

  it('should message user when api reply with error', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({
        from: 'BTC',
        to: 'BLR',
        amount: 10,
      })
      .replyWithError('Erro');

    await ConvertBTC({ currency: 'BLR', amount: 10 });

    expect(consoleStub)
      .to
      .have
      .been
      .calledWith(
        chalk.red('Something went wrong in the API. Try in a few minutes.'),
      );
  });
});
