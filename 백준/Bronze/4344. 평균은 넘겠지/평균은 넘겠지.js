const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

let [A, ...B] = inputData;
let answer ='';
let sum;
let avg;
let count;

for(let i = 0; i < B.length; i++) {
  sum=0;
  avg=0;
  count=0;
  for(let j = 1; j < B[i].length; j++) {
    sum += B[i][j];
  }
  avg = sum/B[i][0];
  for(let k = 1; k < B[i].length; k++) {
    if(B[i][k] > avg) {
      count++;
    }
  }
  answer += (count/B[i][0]*100).toFixed(3) + '%\n';
}
console.log(answer);