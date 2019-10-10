const parse = require('..');

const options = {
  aliases: {
    n: 'name',
    a: 'all'
  }
};

console.log(parse(process.argv.slice(2), options));