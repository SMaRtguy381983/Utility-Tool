const chalk = require('chalk');

const success = chalk.bold.green;
const error = chalk.bold.red;
const warn = chalk.bold.yellow;

// Create new module
exports.debug = (msg, obj, level) => {
  // Get debug status
  const debugging = process.env.DEBUG;

  if (debugging) {
    // Get current time
    const timestamp = new Date();
    let text;

    // Make a string of our text
    text = `\n${timestamp}\n${msg}\n`;
    if (obj) {
      text += JSON.stringify(obj, null, 4);
    }

    // Color text depending on level
    if (level === 0) {
      text = error(text);
    } else if (level === 1) {
      text = success(text);
    }

    // Print to console
    console.log(`${text}\n`);
  }
};

/**
* @function log() will output to console.log()
* @param {String} msg
* @param {Object} obj
* @param {Variable} level
* @return {String} message
*/
exports.log = (msg, obj, level) => {
  // Get debug status
  const debugging = process.env.DEBUG;

  if (debugging) {
  // Get current time
    const timestamp = new Date();
    let text;

    // Make a string of our text
    text = `\n${timestamp}\n${msg}\n`;
    if (obj) {
      text += JSON.stringify(obj, null, 4);
    }

     // Color text depending on level
    if (level === 0) {
      text = error(text);
    } else if (level === 1) {
      text = success(text);
    }

    // Print to console
    console.log(`${text}\n`);
  }
};

/**
* @function error() will output to console.error()
* @param {String} msg
* @param {Object} obj
* @param {Variable} level
* @return {String} message
*/
exports.error = (msg, obj, level) => {
  // Get debug status
  const debugging = process.env.DEBUG;

  if (debugging) {
    // Get current time
    const timestamp = new Date();
    let text;

    // Make a string of our text
    text = `\n${timestamp}\n${msg}\n`;
    if (obj) {
      text += JSON.stringify(obj, null, 4);
    }

    // Color text depending on level
    if (level === 0) {
      text = error(text);
    } else if (level === 1) {
      text = success(text);
    }

    // Print to console
    console.log(`${text}\n`);
  }
};

 /**
 * @function warn() will output to console.warn()
 * @param {String} msg
 * @param {Object} obj
 * @param {Variable} level
 * @return {String} message
 */
exports.warn = (msg, obj, level) => {
  // Get debug status
  const debugging = process.env.DEBUG;

  if (debugging) {
      // Get current time
    const timestamp = new Date();
    let text;

    // Make a string of our text
    text = `\n${timestamp}\n${msg}\n`;
    if (obj) {
      text += JSON.stringify(obj, null, 4);
    }

    // Color text depending on level
    if (level === 0) {
      text = warn(text);
    } else if (level === 1) {
      text = warn(text);
    }

    // Print to console
    console.log(`${text}\n`);
  }
};

/**
 * @function VERSION BUMP
 * @param {String} version: current version number
 * @param {String} tag: 'major', 'minor', 'patch' keywords
 * @return {Element} element
 */
exports.bumpit = (currentV, tag) => {
  const semver = require('semver');

  // test log statement
  console.log('bumped test', currentV, tag);

  // Major bump
  if (tag === 'major') {
    const bumpMajor = semver.inc(currentV, tag);
  }
  return new Error();
};
