const stack = require("./stack");

describe('stack push operation', () => {
  beforeEach(() => {
    // Ensures test isolation by resetting the callstack to an empty array
    stack.callstack = [];
  });

  test('adds input to empty callStack and returns an array with the input as a single item', () => {
    // Check push functionality
    expect(stack.push("First item")).toEqual(["First item"]);
    // Check callStack correctly updated
    expect(stack.callStack).toEqual(["First item"]);
  });

  test('adds input to the end of the callstack and returns an array containing all items, with the input as the last item', () => {
    // Set the callstack with one item already in
    stack.callStack = ["First item"];
    // Check push functionality
    expect(stack.push("Second item")).toEqual(["First item", "Second item"]);
    // Check callStack correctly updated
    expect(stack.callStack).toEqual(["First item", "Second item"]);
  });
})
