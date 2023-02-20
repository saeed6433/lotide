const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results
}

// const results1 = map(words, word => word[0]);


const eqArrays = function(arr1,arr2){
  for (let i = 0; i< arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    } 
  } return true;
}

const assertArraysEqual = function (ar1,ar2) {
  if (eqArrays(ar1,ar2)){
    console.log(`✅ Assertation Passed: ${ar1} and ${ar2} are equal`)
  }
  else console.log('❌ Assertation Failed: Two arrays are NOT equal');
}

// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])

module.exports = map

