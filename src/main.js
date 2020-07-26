#!/usr/bin/env node

const { Command } = require('commander');
const pkg = require('../package.json');
const ConvertBTC = require('./ConvertBTC');

const program = new Command();

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-c', '--currency <currency>', 'Currency to be converted. (Default: USD)')
  .option('-a', '--amount <amount>', 'Value in Bitcoin to be converted. (Default: 1)')
  .parse(process.argv);

ConvertBTC(program.currency, program.amount);
