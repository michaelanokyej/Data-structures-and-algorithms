class Node {
  constructor(data, next) {
    this.value = data;
    this.next = next;
  }
}

class Stack {
  // Constructor is used for the base case
  constructor() {
    this.top = null;
  }

  // Behaviors of the Stack constructor
  push(data) {
    // This push method adds to the stack
    // if stack is empty create a new node
    //  instance and point the next to null
    if (this.top == null) {
      this.top = new Node(data, null);
      return this.top
    }
    // If not empty add up to stack
    const node = new Node(data, this.top);
    // set this.top to next so it will
    // be called next time
    this.top = node;
  }

  pop() {
    // Return undefined if stack is empty
    if (this.top == null) {
      return;
    }
    // save the data we popping into a variable
    const dataToReturn = this.top.value;

    // update the 'top' pointer for this stack (this is what removes the node from the list)
    this.top = this.top.next;

    return dataToReturn;
  }

  
}

function peek(stack) {
  console.log(`Top of stack ${stack.top.value}`) ;
}

function isEmpty(stack) {
  if(stack == null){
    console.log(`Stack is empty`)
  }else{
    console.log(`stack is not empty`) ;
  }
}

function displayStack(stack) {
  console.log("--------------")
  let node = stack.top
  while (node != null) {
      console.log(node);
      node = node.next;
  }
}

function removeItem(stack, item) {
  let node = stack.top
  while (node.value != item) {
    node = node.next;
}
console.log(`${item} has been removed`);
node = node.next;
displayStack(stack)
}

const starTrek = new Stack();
starTrek.push("Kirk")
starTrek.push("Spock")
starTrek.push("McCoy")
starTrek.push("Scotty")
peek(starTrek);
isEmpty(starTrek);
displayStack(starTrek);
removeItem(starTrek, "McCoy")
