const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split('\n');

let [A, ...B] = inputData;
let answer = 0;
B = B.toString().trim().split('');

for(let i = 0; i < A; i++) {
  answer += parseInt(B[i]);
}

console.log(answer);