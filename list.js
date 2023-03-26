class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  checkIndex(index, strict = true) {
    if (index < 0 || (strict ? index >= this.size : index > this.size)) {
      throw new Error("Invalid index");
    }
  }

  length() {
    return this.size;
  }

  append(element) {
    const newNode = new Node(element, this.tail, null);
    if (!this.head) {
      newNode.prev = null;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  insert(element, index) {
    this.checkIndex(index);
    const newNode = new Node(element, null, null);
    if (index === 0) {
      newNode.next = this.head;
      if (!this.head) {
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.size) {
      this.append(value);
    } else {
      let node = this.head;
      for (let i = 1; i < index; i++) {
        node = node.next;
      }
      node.next.prev = newNode;
      newNode.prev = node;
      newNode.next = node.next;
      node.next = newNode;
    }
    this.size++;
  }

  delete(index) {
    this.checkIndex(index);
    if (this.head) {
      let deletedNode;
      if (index === 0) {
        deletedNode = { ...this.head };
        this.head = this.head.next;
        this.head.prev = null;
      } else if (index === this.size - 1) {
        deletedNode = { ...this.tail };
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        let node = this.head;
        for (let i = 0; i < index; i++) {
          node = node.next;
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
        deletedNode = { ...node };
      }

      this.size--;
      return deletedNode;
    }
  }

  deleteAll(element) {
    if (this.head) {
      let node = this.head;
      for (let i = 0; i < this.size; i++) {
        if (node.value === element) {
          this.delete(i);
          i--;
        }
        node = node.next;
      }
    }
  }

  get(index) {
    this.checkIndex(index);
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  clone() {
    const newList = new LinkedList();
    let node = this.head;
    while (node) {
      newList.append(node.value);
      node = node.next;
    }
    return newList;
  }

  reverse() {
    let currentNode = this.head;
    while (currentNode) {
      const temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
      currentNode = temp;
    }
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  findFirst(element) {
    let node = this.head;
    for (let i = 0; i < this.size; i++) {
      if (node.value === element) {
        return i;
      }
      node = node.next;
    }
    return -1;
  }

  findLast(element) {
    let node = this.tail;
    for (let i = this.size - 1; i >= 0; i--) {
      if (node.value === element) {
        return i;
      }
      node = node.prev;
    }
    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  extend(list) {
    if (!this.head) {
      this.head = list.head;
      this.tail = list.tail;
      this.size = list.size;
    } else {
      list.head.prev = this.tail;
      this.tail.next = list.head;
      this.tail = list.tail;
      this.size += list.size;
    }
  }
}

module.exports = {
  LinkedList,
};
