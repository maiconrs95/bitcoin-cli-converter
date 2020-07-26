const { expect } = require('chai');
const { exec } = require('child_process');
const pkg = require('../package.json');

const btcConverter = './src/main.js';

describe('Main CLI', () => {
  it('should return CLI version', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;

      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
});
