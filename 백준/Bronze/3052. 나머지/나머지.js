const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const A = inputData;
let B = "";
let answer = "";
A.forEach((x) => {
  B += (x % 42) + " ";
});
B = B.trim().split(" ");
const set = new Set(B);
answer = [...set].length;
console.log(answer);
