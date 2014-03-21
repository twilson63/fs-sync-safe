var test = require('tap').test;
var ss = require('../');

test('ss should return empty string and log error to console', function(t) {
  var result = ss(__dirname + '/empty.txt');
  t.equal(result, '');
  t.end();
});

