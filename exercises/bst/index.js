// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(nodeData){
    if(nodeData >= this.data){
      this.right ? this.right.insert(nodeData) : this.right = new Node(nodeData);
    }

    if(nodeData < this.data){
      this.left ? this.left.insert(nodeData) : this.left = new Node(nodeData);
    }
  }

  contains(nodeData){
    if(this.data === nodeData) {
      return this;
    }

    if(nodeData > this.data){
      return this.right ? this.right.contains(nodeData) : null;
    } else {
      return this.left ? this.left.contains(nodeData) : null;
    }
  }
}

module.exports = Node;
