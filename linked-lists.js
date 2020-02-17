class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedLists {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last  node 
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head 
    if(!this.head){
      this.head = node;
    }else{
      current = this.head;

      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at
  insertAt(data, index) {
    // return null if index is > than 0 
    // and > than size of the list
    if(index > 0 && index > this.size) {
      return;
    }

    // reuse this.insertFirst if index is 0 
    if(index === 0) {
      this.insertFirst(data);
    }

    const node = new Node(data);
    let current, previous;

    // Set the current to first 
    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }


  
  // Print list Data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedLists();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 0);
// ll.insertAt(600, 2);
ll.printListData();
