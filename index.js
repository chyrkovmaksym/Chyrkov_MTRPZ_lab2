const { LinkedList } = require("./list");

const list = new LinkedList();

console.log("Created list");
console.dir(list);

list.append("a");

list.append("a");

list.append("a");

list.append("b");

list.append("b");

console.log("\nAppend");
console.log(list);

list.insert("c", 1);

console.log("\nInsert + length");
console.log(list);
console.log(list.length());

list.delete(0);

console.log("\nDelete by index 0");
console.log(list);

list.deleteAll("b");

console.log("\nDelete by value");
console.log(list);

console.log("\nGet");
console.log(list.get(0));

const newList = list.clone();

console.log("\nClone");
console.log(list);
console.log(newList);

list.reverse();

console.log("\nReverse (copied list doesn't change)");
console.log(list);
console.log(newList);

console.log("\nFind first 'c'");
console.log(list.findFirst("c"));

console.log("\nFind last 'a'");
console.log(list.findLast("a"));

console.log("\nExtend");
console.log(list);
console.log(newList);
list.extend(newList);
console.log(list);

console.log("\nClear");
list.clear();
console.log(list);
