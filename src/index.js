// random test

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

exports.incVersion = (version, type) => {
  // Ensure that version is a string
  if (version !== String(version)) {
    exports.debug('Second param is not a valid type.', 'e.x. major, minor or patch.', 'error');

    return false;
  }

  // Store the split values of version
  let major = version.split('.')[0];
  let minor = version.split('.')[1];
  let patch = version.split('.')[2];

  // Will ultimately decide if we had a valid type
  let failed = false;

  switch (type) {
    // If type equals 'major', make major = number
    case 'major':
      major++;
      break;

    // If type equals 'minor', make minor = number
    case 'minor':
      minor++;
      break;

    // If type equals 'patch', make patch = number
    case 'patch':
      patch++;
      break;

    default:
      failed = true;
      exports.debug('Second param is not a valid type.', 'e.x. major, minor or patch.', 'error');
  }

  if (!failed) {
    // Join the split values of package.json back together
    const newVersion = `${major}.${minor}.${patch}`;

    exports.debug(`Redefined ${type} of version.`, `Version is now: v${newVersion}`, 'log');

    return newVersion;
  }

  return false;
};
