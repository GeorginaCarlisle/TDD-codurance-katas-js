const stack = {
  callStack: [],
  push: function(input) {
    this.callStack.push(input)
    return this.callStack;
  },
  pop: function() {
    return this.callStack.pop();
  }
}

module.exports = stack;