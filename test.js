var assert = require("chai").assert;
const factorial = require("./factorial");

describe("Fibonacci Function unit tests", () => {
  // Test 1 :
  it("TEST 1", () => {
    assert.equal(factorial(1), 1);
  });

  // Test 2 :
  it("TEST 2", () => {
    assert.equal(factorial(2), 2);
  });

  // Test 3 :
  it("TEST 3", () => {
    assert.equal(factorial(3), 6);
  });

  // Test 4 :
  it("TEST 4", () => {
    assert.equal(factorial(4), 24);
  });

  // Test 5 :
  it("TEST 5", () => {
    assert.equal(factorial(5), 120);
  });
});
