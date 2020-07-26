#!/usr/bin/env node

const { Command } = require('commander');
const pkg = require('../package.json');

const program = new Command();

program
  .version(pkg.version)
  .description('A CLI to convert Bitcoin to any currency provided')
  .parse(process.argv);
