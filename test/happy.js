var test = require('tap').test;
var ss = require('../');

test('ss should return string FOO successfully', function(t) {
  var result = ss(__dirname + '/foo.txt');
  t.equal(result, 'FOO\n');
  t.end();
});

