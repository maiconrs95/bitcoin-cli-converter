#!/usr/bin/env node
"use strict";

var _require = require('commander'),
    Command = _require.Command;

var pkg = require('../package.json');

var ConvertBTC = require('./ConvertBTC');

var program = new Command();
program.version(pkg.version).description(pkg.description).option('-C', '--currency <currency>', 'Currency to be converted. (Default: USD)').option('-A', '--amount <amount>', 'Value in Bitcoin to be converted. (Default: 1)').parse(process.argv);
ConvertBTC(program.currency, program.amount);