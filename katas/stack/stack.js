const stack = {
  callStack: [],
  push: function(input) {
    this.callStack.push(input)
    return this.callStack;
  },
  pop: function() {
    return this.callStack.pop();
  },
  emptyCheck: function() {
    if (this.callStack.length === 0){
      return true;
    } else {
      return false;
    } 
  }
};

module.exports = stack;