/*************Test******************/
var test = require('unit.js');
var str = 'Hello, world!';

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hi')) {
  console.log('Passed');
}
/***********************************/
