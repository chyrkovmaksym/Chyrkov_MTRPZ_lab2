class List {
  constructor(elements) {
    this.nodes = elements?.length ? [...elements] : [];
  }

  length() {
    return this.nodes.length;
  }

  append(element) {
    this.nodes.push(element);
  }

  insert(element, index) {
    this.checkIndex(index);
    this.nodes.splice(index, 0, element);
  }

  delete(index) {
    this.checkIndex(index);
    return this.nodes.splice(index, 1)[0];
  }

  deleteAll(element) {
    this.nodes = this.nodes.filter((node) => node !== element);
  }

  get(index) {
    this.checkIndex(index);
    return this.nodes[index];
  }

  clone() {
    return new List(this.nodes);
  }

  reverse() {
    this.nodes.reverse();
  }

  findFirst(element) {
    return this.nodes.indexOf(element);
  }

  findLast(element) {
    return this.nodes.lastIndexOf(element);
  }

  clear() {
    this.nodes = [];
  }

  extend(elements) {
    this.nodes = [...this.nodes, ...elements];
  }

  checkIndex(index) {
    if (index < 0 || index >= this.nodes.length) {
      throw new Error("Invalid index");
    }
  }
}

module.exports = {
  List,
};
