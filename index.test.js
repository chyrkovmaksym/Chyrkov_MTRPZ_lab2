const { LinkedList } = require("./list");

test("length + append", () => {
  const list = new LinkedList();
  const len1 = list.length();
  list.append("a");
  list.append("b");
  const len2 = list.length();
  expect(len1).toBe(0);
  expect(len2).toBe(2);
  expect(list.get(1).value).toBe("b");
});

test("get", () => {
  const list = new LinkedList();
  list.append("a");
  list.append("b");
  expect(list.get(1).value).toBe("b");
});

test("insert", () => {
  const list = new LinkedList();
  list.append("a");
  list.append("c");
  list.insert("b", 1);
  expect(list.get(1).value).toBe("b");
});

test("delete", () => {
  const list = new LinkedList();
  list.append("a");
  list.append("b");
  list.append("c");
  const deleted = list.delete(1);
  expect(deleted.value).toBe("b");
  expect(list.length()).toBe(2);
});

test("deleteAll", () => {
  const list = new LinkedList();
  list.append("a");
  list.append("a");
  list.append("c");
  list.deleteAll("a");
  expect(list.length()).toBe(1);
});

test("clone", () => {
  const list1 = new LinkedList();
  list1.append("a");
  list1.append("b");
  list1.append("c");
  const list2 = list1.clone();
  list2.delete(0);
  expect(list1.length()).toBe(3);
  expect(list2.length()).toBe(2);
});

test("reverse", () => {
  const list = new LinkedList();
  list.append("a");
  list.append("b");
  list.append("c");
  list.reverse();
  expect(list.get(0).value).toBe("c");
  expect(list.get(list.length() - 1).value).toBe("a");
});

test("findFirst", () => {
  const list = new LinkedList();
  list.append("a");
  list.append("b");
  list.append("b");
  expect(list.findFirst("b")).toBe(1);
});

test("findLast", () => {
  const list = new LinkedList();
  list.append("a");
  list.append("a");
  list.append("b");
  expect(list.findLast("a")).toBe(1);
});

test("expand", () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  list1.append("a");
  list1.append("b");
  list1.append("c");

  list2.append("d");
  list2.append("e");
  list1.extend(list2);

  expect(list1.length()).toBe(5);
});

test("clear", () => {
  const list = new LinkedList();
  list.append("a");
  list.clear();
  expect(list.length()).toBe(0);
});
