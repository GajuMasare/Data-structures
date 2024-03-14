//defined a node
class ListNode {
  constructor(val) {
    this.val = val; //value of the node
    this.next = null; //refrance to the next node, initially null
  }
}

//defined LinkedList
class LinkedList {
  constructor() {
    this.head = null; //refrance to the first node, initially null
    this.size = 0; //size of the linked list, initially 0
  }

  //method to insert a new node at the end of the linked list
  insert(val) {
    const newNode = new ListNode(val); //create a new node
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

  //mathod to print the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

//program starts here
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.print();
