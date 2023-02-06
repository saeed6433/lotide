const eqArrays = function(arr1,arr2){
  for (let i = 0; i< arr1.length; i++) {
    //console.log(arr1[i], arr2[i])
    if (arr1[i] !== arr2[i]){
      return false;
    } 
  } return true;
}

const assertArraysEqual = function (ar1,ar2) {
  if (eqArrays(ar1,ar2)){
    console.log('The arrays are equal')
  }
  else console.log('The arrays are NOT equal');
}

const middle = function (array) {
  let len = array.length
  let oddIndex = Math.floor(len / 2)
  let evenIndex2 = len / 2
  let evenIndex1 = len / 2 - 1 
  if (len < 2){ return []}
  else if (len % 2 === 0){ return [array[evenIndex1], array[evenIndex2]]} 
  else return [array[oddIndex]]
}


assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2]).length, [].length)