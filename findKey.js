const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (obj , callback) {
  for (let key in obj){
    //console.log(key , obj[key], callback(obj[key])) // obj.key does not work because key is variable, there is no 'key' in this obj
    if (callback(obj[key])){return key}

  }
}

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

// const takeUntil = function (data, callback) {
//   let res = data.filter(callback)
//   return(data.slice(0, data.indexOf(res[0])))
// }

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) , "noma" )

module.exports = findKey