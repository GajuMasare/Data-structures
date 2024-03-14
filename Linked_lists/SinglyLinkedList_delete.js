//defined a node
class SinglyLinkedListNode {
  constructor(value) {
    this.value = value; //value of the node
    this.next = null; //refrance to the next node, initially null
  }
}

//defined LinkedList
class SinglyLinkedList {
  constructor() {
    this.head = null; //refrance to the first node, initially null
    this.size = 0; //size of the linked list, initially 0
  }

  //method to insert a new node at the end of the linked list
  insert(value) {
    const newNode = new SinglyLinkedListNode(value); //create a new node
    if (!this.head) {
      this.head = newNode; //if this list is empty, set the new node as the head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; //if next node has value then make the current node as next node
      }
      current.next = newNode; //set the next of the last node to the new node
    }
    this.size++;
  }

  delete(value) {
    //if the list is empty, nothing to delete
    if (!this.head) {
      return;
    }

    //if head node is the one to delete
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    //if the head is not the one to delete
    let current = this.head;
    let previous = null;

    while (current && current.value !== value) {
      previous = current; // Save the reference to the current node
      current = current.next; // Move to the next node
    }

    if (current) {
      previous.next = current.next; // Update the next reference of the previous node
      this.size--; // Decrement the size of the list
    }
  }

  //mathod to print the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

//program starts here
const myList = new SinglyLinkedList();
myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.delete(2);
myList.print();
