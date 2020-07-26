const request = require('request');

function ConvertBTC(currency = 'USD', amount = 1) {
  const url = `
    https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}
  `;

  request(url, (err, response, body) => {
    const apiResponse = JSON.parse(body);

    console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);
  });
}

module.exports = ConvertBTC;
