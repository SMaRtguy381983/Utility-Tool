const chalk = require('chalk');

const success = chalk.bold.green;
const error = chalk.bold.red;

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
      // Print to console
      console.error(error(`${text}\n`));
    } else if (level === 1) {
      // Print to console
      text = console.log(success(`${text}\n`));
    }
  }
};
