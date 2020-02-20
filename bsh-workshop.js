console.log("Let's apply what we learned about binary search trees!");
​
class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
​
    insert(key, value) {
        // empty tree?
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
​
        // less on left
        else if (key < this.key) {
            // nothing on left side
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            // there is something on the left side, so recurse
            else {
                this.left.insert(key, value);
            }
        }
​
        // greater on right (or duplicates, because it doesn't matter for them)
        else {
            // nothing on right side
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
​
            // there is something on the right side, so recurse
            else {
                this.right.insert(key,value);
            }
        }
    }
​
    find(key) {
        // key is null!
        if (key == null) {
            throw new Error("Key was undefined!");
        }
​
        // we found it!
        if (this.key === key) {
            return this.value;
        }
​
        // less mean left
        if (key < this.key && this.left) {
            return this.left.find(key);
        }
​
        // greater means right
        if (key > this.key && this.right) {
            return this.right.find(key);
        }
​
        // we didn't find it
        else {
            throw new Error("Did not find your key in this tree");
        }
    }
​
    remove(key) {
        // is this node the key we are looking for?
        if (this.key === key) {
            // does it have 2 children?
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key)
            }
​
            // does it have only a left child?
            else if(this.left) {
                this._replaceWith(this.left);
            }
​
            // does it have only a right child?
            else if(this.right) {
                this._replaceWith(this.right);
            }
​
            // does it not have any children?
            else {
                this._replaceWith(null);
            }
        }
​
        // look left
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
​
        // look right
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
​
        // never found it, and we don't have any more children to search (this is a leaf node)
        else {
            throw new Error("Did not find your key in this tree")
        }
    }
​
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
​
    _replaceWith(node) {
        // has parent
        if (this.parent) {
            // is this node the parent's left or right?
            if (this === this.parent.left) {
                this.parent.left = node;
            }
            else if(this === this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        // does not have a parent (this means it's a root node)
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right =  null;
            }
        }
    }
}