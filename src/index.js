// Get the file system for writing to file
const fs = require('fs');

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
      text = error(text);
    } else if (level === 1) {
      text = success(text);
    }

    // Print to console
    console.log(`${text}\n`);

    // Print (append) to file
    text = `<li style="background:purple;color:skyblue;font-style:italic">
    <p>${timestamp}</p>
      <p>${msg}</p>
      <p>${JSON.stringify(obj, null, 4)}</p>
</li>
<hr style=background:yellow>`;

    // Print text out to the debug file
    fs.appendFile('logs/debug.log', text, (err) => {
      // Display error in console if it is not null
      if (err) {
        console.log(err);
      }
    });
  }
};
