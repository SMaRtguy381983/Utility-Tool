const bump = require('../src/index');
const expect = require('chai').expect;

// Unit test for version bumping
describe('VERSION BUMP TEST: ', () => {
  it('should test the MAJOR bump', (done) => {
    const tag = 'major';
    const currentV = 'k';
    const bumpit = bump.bumpit(currentV, tag);

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
