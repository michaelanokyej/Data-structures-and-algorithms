class bsh {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new bsh(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new bsh(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
}

function isBST(BST) {
  if (!BST) {
    console.log("No tree provided");
  } else if (BST.left < BST.parent && BST.right > BST.parent) {
    // let currentLeft = BST.left;
    // let currentRight = BST.right;
    // while(BST.left != null){
    //   currentLeft = BST.left;
    // }
      if (isBST(BST) == true && isBST(BST) == true) {
        console.log( "This is a Binary Search Tree");
      }
    }else{
      console.log("Not BST");
    } 
}

const newTree = new bsh(3, 3);
newTree.insert(1, 1);
newTree.insert(4, 4);
newTree.insert(6, 6);
newTree.insert(9, 9);
newTree.insert(2, 2);
newTree.insert(5, 5);
newTree.insert(7, 7);

isBST(newTree);

// console.log(newTree)
