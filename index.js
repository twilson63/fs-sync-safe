var fs = require('fs');

module.exports = function(name, log) {
  if (!name) { throw new Error('NAME is required!'); return; }
  log = log || console.log;
  try {
    return fs.readFileSync(name, 'utf8').toString();
  } catch (err) {
    log(err);
    return '';
  }
};
