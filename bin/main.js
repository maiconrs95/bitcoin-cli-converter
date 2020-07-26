#!/usr/bin/env node
"use strict";

var _require = require('commander'),
    Command = _require.Command;

var pkg = require('../package.json');

var program = new Command();
program.version(pkg.version).description(pkg.description).parse(process.argv);