const eqArrays = require("./eqArrays");


const assertArraysEqual = function (ar1,ar2) {
  if (eqArrays(ar1,ar2)){
    console.log(`✅ Assertation Passed: ${ar1} and ${ar2} are equal`)
  }
  else console.log('❌ Assertation Failed: Two arrays are NOT equal');
}

module.exports = assertArraysEqual