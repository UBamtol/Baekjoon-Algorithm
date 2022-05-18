const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

const A = inputData[0];
const B = inputData[1].split(" ").map(Number);
let answer = "";
let max = B[0];
let sum = 0;

for (let i = 0; i < B.length; i++) {
  if (max < B[i]) {
    max = B[i];
  }
  sum += B[i];
}
answer = ((sum / max) * 100) / A;
console.log(answer);
