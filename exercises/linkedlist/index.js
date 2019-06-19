// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let i = 0;
    let current = this.head;
    while(current){
      current = current.next;
      i++;
    }
    return i;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let current = this.head;
    while(current && current.next){
      current = current.next
    }
    return current;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    this.head = this.head ? this.head.next : null;
  }

  removeLast(){
    if(!(this.head && this.head.next)) {
      this.head = null;
      return;
    }

    let current = this.head;
    let last = current.next;
    while(last.next){
      current = last;
      last = last.next;
    }
    current.next = null;
  }

  insertLast(data){
    const last = this.getLast();
    if(!last){
      this.insertFirst(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(position){
    let i = 0;
    let current = this.head;

    while(i < position && current && current.next){
      current = current.next;
      i++;
    }

    return i < position ? null : current;
  }

  removeAt(position){
    if(position > 0){
      let previous = this.getAt(position - 1);
      if(previous && previous.next) {
        previous.next = previous.next.next;
      }
    } else {
      this.removeFirst();
    }
  }

  insertAt(data, position){
    const node = new Node(data);
    if(position === 0){
      return this.insertFirst(data);
    } else {
      let previous = this.getAt(position - 1);
      if(previous) {
        node.next = previous.next;
        previous.next = node;
      } else {


        this.insertLast(data);
      }
    }
  }

  forEach(func){
    let node = this.head;
    let i = 0;

    while(node){
      func.apply(null, [node, i]);
      node = node.next;
      i++;
    }
  }

  *[Symbol.iterator](){
    let node  = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
