const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(' ');

let A = parseInt(inputData);
let answer = 0;
let num = 1;
let count = 1;

while(true) {
  if(A < 7) {
    if(A%6 === 1) {
      answer = 1;
      break;
    } else {
      answer = 2;
      break;
    }
  } else{
    if(A <= num) {
      answer = count;
      break;
    } else {
      num += 6 * count;
      count++;
    }
  }
}

console.log(answer);