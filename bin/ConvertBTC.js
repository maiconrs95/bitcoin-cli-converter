"use strict";

var request = require('request');

var chalk = require('chalk');

function ConvertBTC() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$currency = _ref.currency,
      currency = _ref$currency === void 0 ? 'USD' : _ref$currency,
      _ref$amount = _ref.amount,
      amount = _ref$amount === void 0 ? 1 : _ref$amount;

  var options = {
    url: "https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=".concat(currency, "&amount=").concat(amount),
    headers: {
      'x-ba-key': process.env.API_KEY
    }
  };
  request(options, function (err, response, body) {
    var apiResponse;

    try {
      apiResponse = JSON.parse(body);
    } catch (parserError) {
      console.log(chalk.red('Something went wrong in the API. Try in a few minutes.'));
      return parserError;
    }

    console.log("".concat(chalk.red(amount), " BTC to ").concat(chalk.cyan(currency), " = ").concat(chalk.yellow(apiResponse.price)));
  });
}

module.exports = ConvertBTC;