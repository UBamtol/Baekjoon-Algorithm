const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let A = inputData;
let answer = 1;
let num = 1;

while(true){
  if(num > A) {
    break;
  } else {
    answer *= num;
    num++;
  }
}
console.log(answer);
