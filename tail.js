const assertEqual = function(actual , expected) {
  // console.log(actual , expected)
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  }
  //else return (array.slice(1));
  return array.slice(1);
};

assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length,((["Hello", "Lighthouse", "Labs"]).length) - 1);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
assertEqual(tail(["Hello"]).length,[].length);