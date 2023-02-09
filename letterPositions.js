const eqArrays = function(arr1,arr2){
  for (let i = 0; i< arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    } 
  } return true;
}

const assertArraysEqual = function (ar1,ar2) {
  if (eqArrays(ar1,ar2)){
    console.log('✅ Passed')
  }
  else console.log('❌ Failed');
}

const letterPositions = function (str) {
  let obj = {}
  for (let i=0; i < str.length; i++){
    if (str[i] !== ' '){
      if(obj.hasOwnProperty(str[i])){
        obj[str[i]].push(i)
      } else {obj[str[i]]=[i]}
    }
    
  } 
  console.log(obj);
  return obj
}
letterPositions("lighthouse in the house")
letterPositions("hello")

assertArraysEqual(letterPositions("hello"),{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] })
