const request = require('request');

function ConvertBTC({ currency = 'USD', amount = 1 } = {}) {
  const url = `
    https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}
  `;

  request(url, (err, response, body) => {
    let apiResponse;

    try {
      apiResponse = JSON.parse(body);
    } catch (parserError) {
      console.log('Something went wrong in the API. Try in a few minutes.');
      return parserError;
    }

    console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);
  });
}

module.exports = ConvertBTC;
