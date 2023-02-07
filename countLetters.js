const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  let obj = {}
  let wordSum
  for (let word of str){
    if (word !== ' '){
      if(obj.hasOwnProperty(word)){
        obj[word]+=1
      } else {obj[word]=1}
    }
    
  } 
  console.log(obj);
  return obj
}
countLetters("lighthouse in the house")
// countLetters(['a','b', 'b', 'a', ,'c'])


