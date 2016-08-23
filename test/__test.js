const expect = require('chai').expect;
const sinon = require('sinon');

let app;

// FIXME: mocha test failling
describe('Utility Tool', () => {
  beforeEach(() => {
    app = require('../src/index');

    // Fake the console write streams
    sinon.stub(console, 'log');
    sinon.stub(console, 'error');
    sinon.stub(console, 'warn');
  });

  afterEach(() => {
    console.log.restore();
    console.error.restore();
    console.warn.restore();
  });

  it('Debugs to console', (done) => {
    app.debug('test message', {}, 1);

    expect(console.log.callCount).to.equal(1);

    done();
  });

  it('should output to log stream', (done) => {
    app.log('test message', {}, 1);

    expect(console.log.callCount).to.equal(1);
    done();
  });

  it('should output to error stream', (done) => {
    app.error('test message', {}, 1);

    expect(console.log.callCount).to.equal(1);

    done();
  });

  it('should output to warn stream', (done) => {
    app.warn('test message', {}, 1);

    expect(console.log.callCount).to.equal(1);

    done();
  });

  it('should bump the version', (done) => {
    const bumpit = app.bump('current', 'bump by major minor or patch');
    expect(bumpit).to.be.ok;
    done();
  });
});
