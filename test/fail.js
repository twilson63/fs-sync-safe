var test = require('tap').test;
var ss = require('../');

test('if empty name passed should throw exception', function(t) {
  try {
   ss();
  } catch (err) {
    t.equal(err.message, 'NAME is required!');
    console.log(err);
    return t.end();
  }
  t.ok(false, 'this should not print');
  t.end();
});
