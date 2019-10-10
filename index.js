/**
 * parse argv
 * @param {Array} argv 
 * @param {Object} options
 */
const parse = (argv = process.argv.slice(2), options = {}) => {
  const { aliases = {} } = options;
  return argv.reduce((result, parameter) => {
    if (parameter.startsWith('--')) { // long flag
      const m = parameter.match(/^--(\w+)(=(.+))?$/);
      const k = m[1];
      const v = m[3] ? m[3] : true;
      result[k] = v;
    } else if (parameter.startsWith('-')) { // short flag
      parameter.match(/[a-zA-Z]/g).forEach(flag => {
        result[aliases[flag] || flag] = true;
      });
    } else {
      result._.push(parameter);
    }
    return result;
  }, {
    _: []
  });
}

module.exports = parse;