const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters   = require('./countLetters');
const findKey   = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten   = require('./flatten');
const letterPositions   = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle:   middle,
  countLetters:   countLetters,
  findKey:  findKey,
  findKeyByValue:   findKeyByValue,
  flatten:  flatten,
  letterPositions:  letterPositions,
  map,  //ES6 Property Value Shorthand just like 'map:  map'
  takeUntil,  
  without
};