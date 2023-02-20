// const assertEqual = require("../assertEqual")
const tail = require("../tail")
const assert = require("chai").assert


// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length,((["Hello", "Lighthouse", "Labs"]).length) - 1);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
// assertEqual(tail(["Hello"]).length,[].length);

describe("#Tail", () => {
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"])
  })
  it('should return [] for ["Hello"]', () => {
    assert.deepEqual(tail(["Hello"]),[])
  })
 
})