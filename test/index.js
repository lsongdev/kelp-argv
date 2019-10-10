const parse = require('..');
const test = require('./test');
const assert = require('assert');

const options = {
  aliases: {
    n: 'name',
    a: 'all'
  }
};

(async () => {

  await test('kelp-argv parse rest parameters', async () => {
    const a = parse([ 'test' ]);
    assert.equal(a._[0], 'test');
  });

  await test('kelp-argv parse long flag', async () => {
    const a = parse([ '--long' ]);
    assert.ok(a.long);
  });

  await test('kelp-argv parse long flag with value', async () => {
    const a = parse([ '--long=value' ]);
    assert.equal(a.long, 'value');
  });

  await test('kelp-argv parse short flag', async () => {
    const a = parse([ '-na' ], options);
    assert.equal(a.all, true);
    assert.equal(a.name, true);
  });

})();