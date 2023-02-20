const eqArrays = function(arr1,arr2){
  for (let i = 0; i< arr1.length; i++) {
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

const flatten = function (array) {
  let flat = []
  for (el of array){
    if (Array.isArray(el)){
      for(e of el) {flat.push(e)}
    }
    else flat.push(el)
  }  
  return flat
}

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])

module.exports = flatten