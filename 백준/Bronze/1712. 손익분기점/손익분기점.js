const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(' ').map(Number);

let [A, B, C] = inputData;
let answer = 0;

if(C<=B){
  answer = -1;
} else {
  answer = Math.floor(A/(C-B)) + 1;
}

console.log(answer);