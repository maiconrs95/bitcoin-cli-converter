const { expect } = require('chai');
const { exec } = require('child_process');

const btcConverter = './src/main.js';

describe('Main CLI', () => {
  it('should return hello world', (done) => {
    exec(btcConverter, (err, stdout, stderr) => {
      if (err) throw err;

      expect(stdout.replace('\n', '')).to.be.equal('Hello World');
      done();
    });
  });
});
