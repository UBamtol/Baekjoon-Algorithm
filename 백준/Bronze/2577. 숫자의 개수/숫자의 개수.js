const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const A = inputData;
let B = 1;
let count;
let answer = "";

A.forEach((x) => {
  B *= x;
});
B = B.toString().split("");

for (let i = 0; i <= 9; i++) {
  count = 0;
  for (let j = 0; j < B.length; j++) {
    if (B[j] == i) {
      count++;
    }
  }
  answer += count + "\n";
}
console.log(answer);
