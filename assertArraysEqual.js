const assertEqual = function(actual , expected) {
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

const assertArrayEqual = function (ar1,ar2) {
  if (eqArrays(ar1,ar2)){
    console.log(`${ar1} and ${ar2} are equal`)
  }
  else console.log(`${ar1} and ${ar2} are NOT equal`);
}

assertArrayEqual([1, 2, 3], [1, 2, 3])
assertArrayEqual([1, 2, 3], [3, 2, 1])
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"])
assertArrayEqual(["1", "2", "3"], ["1", "2", 3])