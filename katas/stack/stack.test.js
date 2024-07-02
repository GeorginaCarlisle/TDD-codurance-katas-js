const stack = require("./stack");

test('stack push operation returns input as an item within a list', () => {
  expect(stack.push("First item")).toEqual(["First item"]);
});