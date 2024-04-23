// Stack uses LIFO (Last in first out)
// Take is like plates stacked on each other,
// the last plate we stack on the top will
// the first to be removed

class Stack {
  constructor() {
    this.items = [];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // peek is to look at the top element in stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // push a element at the top
  push(element) {
    this.items.push(element);
  }

  // pop the element from thetop
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }
}

// code starts here
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("The Stack:", stack);
console.log("Is the stack empty?", stack.isEmpty());
console.log("Removed top element:", stack.pop());
console.log("The top element after pop:", stack.peek());
