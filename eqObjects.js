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
    if (arr1[i] !== arr2[i]){
      return false;
    } 
  } return true;
}


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);
// assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);