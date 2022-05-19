const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

let [A, ...B] = inputData;
let answer = [];
let queue = [];

for (let i = 0; i < parseInt(A); i++) {
  if (B[i][0] === "push") {
    queue.push(B[i][1]);
  } else if (B[i][0] == "pop") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue.shift());
    }
  } else if (B[i][0] == "size") {
    answer.push(queue.length);
  } else if (B[i][0] == "empty") {
    if (queue.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (B[i][0] == "front") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[0]);
    }
  } else if (B[i][0] == "back") {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue[queue.length - 1]);
    }
  }
}

console.log(answer.join("\n"));
