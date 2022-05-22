const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let A = inputData;
let answer = 0;
let isTrue = true;

for(let i = 1; i <= A; i++) {
  const newNum = i.toString();
  for(let j = 0; j < newNum.length-2; j++) {
    if(parseInt(newNum[j+1]) - parseInt(newNum[j]) !== parseInt(newNum[j+2]) - parseInt(newNum[j+1])) {
      isTrue = false;
      break;
    } else {
      isTrue = true;
    }
  }
  if(isTrue) {
    answer++;
  }
}

console.log(answer);