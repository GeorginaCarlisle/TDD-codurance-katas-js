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
  },
  size: function() {
    return this.callStack.length;
  }
};

module.exports = stack;