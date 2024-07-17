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

describe('stack pop operation', () => {
  beforeEach(() => {
    //Ensures test isolation by resetting the stack to include the same two elements
    stack.callStack = [
      "First element",
      "Second element"
    ];
  });

  test('returns the top element of the stack', () => {
    expect(stack.pop()).toBe("Second element");
  });

  test('top element removed from the call stack', () => {
    stack.pop();
    expect(stack.callStack).toEqual(["First element"])
  });
});

describe('stack emptyCheck operation', () => {
  beforeEach(() => {
    //Ensures test isolation by ensuring an empty stack at the start of each test
    stack.callStack = [];
  });

  test('Empty stack returns true', () => {
    expect(stack.emptyCheck()).toBe(true);
  });

  test('Stack containing at least one element returns false', () => {
    stack.callStack = ["First element"];
    expect(stack.emptyCheck()).toBe(false);
  });
});

describe('stack size operation', () => {
  beforeEach(() => {
    //Ensures test isolation by ensuring an empty stack at the start of each test
    stack.callStack = [];
  });

  test('Empty stack returns 0', () => {
    expect(stack.size()).toBe(0);
  });

  test('Stack of 1 returns 1', () => {
    stack.push('first element');
    expect(stack.size()).toBe(1);
  });

  test('Stack of 2 returns 2', () => {
    stack.push('first element');
    stack.push('second element');
    expect(stack.size()).toBe(2);
  });
});