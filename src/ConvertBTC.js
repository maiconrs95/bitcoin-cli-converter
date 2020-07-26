const request = require('request');
const chalk = require('chalk');

function ConvertBTC({ currency = 'USD', amount = 1 } = {}) {
  const options = {
    url: `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`,
    headers: {
      'x-ba-key': 'NDEyNjllMzBiNjg3NDRhYzg1NGYyY2Y5Y2FjYzc4NmQ',
    },
  };

  request(options, (err, response, body) => {
    let apiResponse;

    try {
      apiResponse = JSON.parse(body);
    } catch (parserError) {
      console.log(
        chalk.red('Something went wrong in the API. Try in a few minutes.'),
      );
      return parserError;
    }

    console.log(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(apiResponse.price)}`);
  });
}

module.exports = ConvertBTC;
