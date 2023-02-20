const eqArrays = function(arr1,arr2){
  for (let i = 0; i< arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    } 
  } return true;
}

const assertArraysEqual = function (ar1,ar2) {
  if (eqArrays(ar1,ar2)){
    //console.log(`${ar1} and ${ar2} are equal`)
    console.log('The arrays are equal')
  }
  //else console.log(`${ar1} and ${ar2} are NOT equal`);
  else console.log('The arrays are NOT equal')

}

const without = function (source , itemsToRemove) {
  let sourceWithout = []
  for (let ele of source){
    if(!itemsToRemove.includes(ele)) {
      sourceWithout.push(ele)
    } 
    //itemsToRemove.includes(ele) ? sourceWithout.push(ele) :
  }
    return sourceWithout
}


// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 

// no need to capture return value for this test case
// Make sure the original array was not altered by the without function

// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without