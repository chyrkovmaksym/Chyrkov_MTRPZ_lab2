const { List } = require("./list");

const list = new List();

console.log("Created list");
console.dir(list);

list.append("a");

list.append("a");

list.append("a");

list.append("b");

list.append("b");

console.log("\nAppend");
console.log(list.nodes);

list.insert("c", 1);

console.log("\nInsert + length");
console.log(list.nodes);
console.log(list.length());

list.delete(0);

console.log("\nDelete by index 0");
console.log(list.nodes);

list.deleteAll("b");

console.log("\nDelete by value");
console.log(list.nodes);

console.log("\nGet");
console.log(list.get(0));

const newList = list.clone();

console.log("\nClone");
console.log(list.nodes);
console.log(newList.nodes);

list.reverse();

console.log("\nReverse (copied list doesn't change)");
console.log(list.nodes);
console.log(newList.nodes);

console.log("\nList: ");
console.log(list.nodes);

console.log("\nFind first 'c'");
console.log(list.findFirst("c"));

console.log("\nFind last 'a'");
console.log(list.findLast("a"));

console.log("\nExtend");
console.log(list.nodes);
console.log(newList.nodes);
list.extend(newList.nodes);
console.log(list.nodes);

console.log("\nClear");
list.clear();
console.log(list.nodes);
