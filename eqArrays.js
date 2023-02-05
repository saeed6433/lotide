const assertArrayEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2){
  for (let i = 0; i< arr1.length; i++) {
    //console.log(arr1[i], arr2[i])
    if (arr1[i] !== arr2[i]){
      return false;
    } 
  } return true;
}

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false