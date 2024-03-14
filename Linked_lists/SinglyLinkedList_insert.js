//Defined singly linked list node
class SinglyLinkedListNode {
  constructor(value) {
    this.value = value; //the value of the node
    this.next = null; //pointer to the next node, initially null
  }
}

//Defined singly linked list
class SinglyLinkedList {
  constructor() {
    this.head = null; //refrence to the first node, initially null
    this.size = 0; //position of the node in the list, initially 0
  }

  //method to insertFist node at the start of the list
  insertFirst(value) {
    const newNode = new SinglyLinkedListNode(value); //create a new node
    newNode.next = this.head; //point the new node to current head
    this.head = newNode; //update the head to the new node
    this.size++; //increment the size of the list
  }

  //method to insertLast node at the end of the list
  insertLast(value) {
    const newNode = new SinglyLinkedListNode(value); //created new node
    if (!this.head) {
      this.head = newNode; //if the list is empty, set the new node as the head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; //find the last node in the list
      }
      current.next = newNode;
    }
    this.size++;
  }

  //method to print the values of the list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const myList = new SinglyLinkedList();
myList.insertFirst(5);
myList.insertLast(10);
myList.insertLast(20);
myList.insertLast(30);
myList.print();
