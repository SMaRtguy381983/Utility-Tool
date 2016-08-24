const expect = require('chai').expect;
const sinon = require('sinon');
const bump = require('../src/index');

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
});

// Unit test for version bumping
describe('version bump test', () => {
  it('should test the MAJOR bump', (done) => {
    const currentV = '0.0.0';
    const tag = 'major';
    const bumpit = bump.bumpit(currentV, tag);

    // expect(fn).to.increase(obj, 'val');

    console.log(bumpit);
    done();
  });

  it('should test the MINOR bump', (done) => {
    const currentV = '0.0.0';
    const tag = 'major';
    const bumpit = bump.bumpit(currentV, tag);

    console.log(bumpit);
    done();
  });

  it('should test the PATCH bump', (done) => {
    const currentV = '0.0.0';
    const tag = 'major';
    const bumpit = bump.bumpit(currentV, tag);

    console.log(bumpit);
    done();
  });
});
