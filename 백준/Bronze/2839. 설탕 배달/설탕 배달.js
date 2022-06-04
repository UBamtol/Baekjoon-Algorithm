const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let N = inputData;
let answer = -1;
let num = Math.floor(N/5);
let temp = 0;

if(N%5 === 0) {
  answer = N/5;
} else if( N%5 !== 0 ) {
  num = Math.floor(N/5);
  for(let i = num; i >= 0; i--) {
    temp = (N-5*num) % 3;
    if(temp === 0 ){
      answer = num + (N-(5*num)) / 3;
    } else {
      num--;
    }
  }
}

console.log(answer);