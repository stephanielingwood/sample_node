'use strict';

var anotherTestRequire = require('../libToo/anotherTestRequire.js');
var testComponentRequire = require('../libToo/testRequire.component.js');

module.exports = {
  string: anotherTestRequire('myString'),
  stringToo: testComponentRequire('moreString')
};
