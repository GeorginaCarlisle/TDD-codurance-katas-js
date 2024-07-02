const stack = {
  push: function(input) {
    this.callStack.push(input)
    return [input];
  }
}

module.exports = stack;