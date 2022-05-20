const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let A = inputData;
let answer=0;
let sum;


while (true) {
  sum = Math.floor(A / 10) + (A % 10);
  A = (A % 10) * 10 + (sum % 10);
  
  answer++;

  if (parseInt(inputData) === A) {
    console.log(answer);
    break;
  }
}
