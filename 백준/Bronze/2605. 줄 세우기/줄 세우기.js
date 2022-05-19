const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

let [A, ...B] = inputData;
let answer = "";
let temp = [];
B = B.toString().split(" ").map(Number);

for (let i = 0; i < A; i++) {
  if (B[i] === 0) {
    temp.push(i + 1);
  } else {
    temp.splice(temp.length - B[i], temp.length - i, i + 1);
  }
}
answer += temp.join(" ");
console.log(answer);
