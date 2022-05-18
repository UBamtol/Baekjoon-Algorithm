const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const A = inputData;
let answer = "";
let max = A[0];
let count = 1;

for (let i = 1; i < A.length; i++) {
  if (max < A[i]) {
    max = A[i];
    count = i + 1;
  }
}
answer += max + "\n" + count;
console.log(answer);
