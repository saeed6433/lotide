const eqArrays = function(arr1,arr2){
  for (let i = 0; i< arr1.length; i++) {
    //console.log(arr1[i], arr2[i])
    if (arr1[i] !== arr2[i]){
      return false;
    } 
  } return true;
}


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length){
    let arr = Object.keys(object1)
    for (let key of arr){
      if (Array.isArray(object1[key])){
        if (!eqArrays(object1[key],object2[key])){
          return false
        }
      }  
      else if (object1[key] !== object2[key]){
        return false
      } 
    } 
    return true
  } 
  return false
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)){
    console.log(`✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
  else console.log(`❌ Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject)
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject)
