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

// Increment the Version passed, based off of pVersion and pType.
exports.incVersion = (pVersion, pType) => {
  const errMsg = 'e.x. major, minor, patch, premajor, preminor, prepatch, prerelease';

  // Ensure that pVersion and pType are of type String.
  if (pVersion !== String(pVersion)) {
    exports.debug('pVersion is not valid', '1.0.0-alpha > 1.0.0-alpha.1 > 1.0.0-alpha.beta > ' +
      '1.0.0-beta > 1.0.0 > 1.0.1 > 1.1.0 > 2.0.0', 'error');

    return false;
  } else if (pVersion !== String(pVersion)) {
    exports.debug('pType is not valid', errMsg, 'error');

    return false;
  }

  // Store the split values of pVersion.
  // e.x. 2.5.3
  const ids = pVersion ? pVersion.split('-')[0] : undefined; // e.x. '2.5.3'
  const aSplit = ids ? ids.split('.') : undefined; // e.x. ['2', '5', '3']
  let major = aSplit && aSplit[0] ? Number(aSplit[0]) : 1; // e.x. '2'
  let minor = aSplit && aSplit[1] ? Number(aSplit[1]) : 0; // e.x. '5'
  let patch = aSplit && aSplit[2] ? Number(aSplit[2]) : 0; // e.x. '3'

  // e.x. 1.0.0-prealpha.23
  const preRelIds = pVersion ? pVersion.split('-')[1] : undefined; // e.x. 'prealpha.23'
  const bSplit = preRelIds ? preRelIds.split('.') : undefined; // e.x. ['prealpha', '23']
  let preRelType = bSplit && bSplit[0] ? String(bSplit[0]) : undefined; // e.x. 'prealpha'
  let preRelNumb = bSplit && bSplit[1] ? Number(bSplit[1]) : undefined; // e.x. '23'

  // Convert pType to lower case.
  const type = pType.toLowerCase();

  // If pType equals a case...
  switch (type) {
    case 'major':
      major++; // Increment major by one.

      minor = 0; // Reset minor to zero.

      patch = 0; // Reset patch to zero.

      break;

    case 'minor':
      minor++; // Increment minor by one.

      patch = 0; // Reset patch to zero.

      break;

    case 'patch':
      patch++; // Increment patch by one.

      break;

    case 'premajor':
    case 'pre-major':
    case 'preminor':
    case 'pre-minor':
    case 'prepatch':
    case 'pre-patch':
    case 'prerelease':
    case 'pre-release':
      major = 1; // Reset major to one.

      minor = 0; // Reset minor to zero.

      patch = 0; // Reset patch to zero.

      // Define preRelType, if it's not set.
      if (!preRelType) {
        preRelType = type.replace('-', '');
      }

      // Increment preRelNumb if it's set, it must either not exist; or, be larger than one.
      if (preRelNumb) {
        preRelNumb++; // Increment preRelNumb by one.
      }

      break;

    default:
      exports.debug('pType is not valid', errMsg, 'error');

      return false;
  }

  // Join the split values of pVersion back together
  const newVersion = `${major}.${minor}.${patch}${preRelType || preRelNumb ? '-' : ''}` +
  `${preRelType ? `${preRelType}` : ''}${preRelType && preRelNumb ? '.' : ''}` +
  `${preRelNumb ? `${preRelNumb}` : ''}`;

  exports.debug(`Incremented ${pType} of version!`, `Version is now: v${newVersion}`, 'log');

  return newVersion;
};

exports.incVersion('2.2.1', 'minor');
