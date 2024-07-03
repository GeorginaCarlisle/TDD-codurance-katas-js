const stack = {
  callStack: [],
  push: function(input) {
    this.callStack.push(input)
    return this.callStack;
  }
}

module.exports = stack;