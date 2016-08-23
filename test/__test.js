const expect = require('chai').expect;
const sinon = require('sinon');
const index = require('../src/index');

let app;

describe('Utility Tool', () => {
  beforeEach(() => {
    app = require('../src/index');

    sinon.stub(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('Debugs to console', (done) => {
    app.debug('test message', {}, 1);

    expect(console.log.callCount).to.equal(1);

    done();
  });
});

describe('TimeTo_Go Version Number Increaser Test: ', () => {
  it('Should Return a String', (done) => {
    const incVersion = index.incVersion('1.0.0', 'patch');

    if (incVersion && incVersion === String(incVersion)) {
      done();
    }
  });

  it('Should Return False', (done) => {
    const incVersion = index.incVersion(1.2, 'minor');

    if (!incVersion) {
      done();
    }
  });

  it('Should Return False', (done) => {
    const incVersion = index.incVersion('1.0.0', 'pink');

    if (!incVersion) {
      done();
    }
  });
});
