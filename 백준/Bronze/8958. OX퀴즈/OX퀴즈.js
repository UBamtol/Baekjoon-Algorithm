const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n");

let [A, ...B] = inputData;
let answer = "";
let sum = 0;
let result = 0;

for (let i = 0; i < B.length; i++) {
  sum = 0;
  for (let j = 0; j < B[i].length; j++) {
    if (B[i][j] === "O") {
      sum++;
      result += sum;
    } else if (B[i][j].trim() === "X") {
      sum = 0;
    }
  }
  answer += result + "\n";
  result = 0;
}
console.log(answer);
