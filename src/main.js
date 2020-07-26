#!/usr/bin/env node

const { Command } = require('commander');
const pkg = require('../package.json');

const program = new Command();

program
  .version(pkg.version)
  .description(pkg.description)
  .parse(process.argv);
