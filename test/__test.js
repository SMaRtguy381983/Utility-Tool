const expect = require('chai').expect;
const sinon = require('sinon');

let app;

// FIXME: mocha test failling
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
