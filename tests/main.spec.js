const { expect } = require('chai');
const { exec } = require('child_process');
const pkg = require('../package.json');

const btcConverter = './src/main.js';

describe('Main CLI', () => {
  it('should return version of bitcoin-CLI-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;

      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description when bitcoin-CLI-converter --help ', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;

      expect(
        stdout.includes(
          'A CLI to convert Bitcoin to any currency provided',
        ),
      ).to.be.equal(true);
      done();
    });
  });

  it('should return the currency option when bitcoin-CLI-converter --help ', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;

      expect(stdout.includes('--currency')).to.be.equal(true);
      done();
    });
  });

  it('should return the amount option when bitcoin-CLI-converter --help ', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;

      expect(stdout.includes('--amount')).to.be.equal(true);
      done();
    });
  });
});
