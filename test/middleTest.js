// const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")
const assert = require ('chai').assert

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
// assertArraysEqual(middle([1, 2]), [])

describe("#middleTest", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])
  })
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3])
  })
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle(([1, 2])),[])
  })
})
