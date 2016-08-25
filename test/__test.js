const expect = require('chai').expect;
const sinon = require('sinon');
const utilityTool = require('../src/index');

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

describe('Utility-Tool-1: Version Number Increaser Unit Test(s): ', () => {
  const tests = [{
    expect: '1.0.0-prepatch',
    type: 'prepatch',
    version: '3.2.1',
  }, {
    expect: '1.0.0-prepatch',
    type: 'prepatch',
    version: '1.0.0',
  }, {
    expect: '1.0.0-prepatch.1',
    type: 'prepatch',
    version: '1.0.0-prepatch',
  }, {
    expect: '1.0.0-prepatch.2',
    type: 'prepatch',
    version: '1.0.0-prepatch.1',
  }, {
    expect: '1.0.0-preminor',
    type: 'preminor',
    version: '1.0.0',
  }, {
    expect: '1.0.0-premajor',
    type: 'premajor',
    version: '1.0.0',
  }, {
    expect: '1.0.0-prerelease',
    type: 'prerelease',
    version: '1.0.0',
  }, {
    expect: '2.1.4',
    type: 'patch',
    version: '2.1.3',
  }, {
    expect: '2.2.0',
    type: 'minor',
    version: '2.1.4',
  }, {
    expect: '3.0.0',
    type: 'major',
    version: '2.2.0',
  }];

  tests.forEach(test => {
    it(`${test.type} on ${test.version} should return ${test.expect}`, (done) => {
      expect(utilityTool.incVersion(test.version, test.type)).to.equal(test.expect);

      done();
    });
  });
});
