const { readFileSync } = require("fs");
const path = require("path");

const file = readFileSync(
  path.join(__dirname, "/input.txt"),
  "utf8"
).toString();

let data = file.split("\n\n");

function add(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

data = data.map((elf) => elf.split("\n").map(Number));
data = data.map((elf) => add(elf));
data = data.sort((a, b) => a - b);

//part 1
console.log(data.slice([-1])[0]);

//part 2
console.log(
  data[data.length - 1] + data[data.length - 2] + data[data.length - 3]
);
