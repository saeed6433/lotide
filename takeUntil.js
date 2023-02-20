const takeUntil = function (data, callback) {
  let res = data.filter(callback)
  return(data.slice(0, data.indexOf(res[0])))
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');



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

// assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ])
// assertArraysEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood' ])

module.exports = takeUntil

