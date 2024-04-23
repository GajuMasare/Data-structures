// Stack uses FIFO (First in first out)
// Take is like queue for food,
// the first person at the queue
// will be first to be served

class Queue {
  constructor() {
    this.items = [];
  }

  //   to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  //   to push into the queue
  push(element) {
    return this.items.push(element);
  }

  // to remove frist element from queue
  pop() {
    if (this.isEmpty()) {
      return "The queue is empty";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "The queue is empty";
    }
    return this.items[0];
  }
}

// code starts here
const queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);

console.log("The queue is:", queue);
console.log("Is the queue empty?", queue.isEmpty());
console.log("Removed first element:", queue.pop());
console.log("The first element now is:", queue.peek());
