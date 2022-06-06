const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split('\n');

let [A, ...B] = inputData;
B=B.toString().split(' ').map(v=>parseInt(v));
let count = 0;

for(let i = 0; i < A; i++) {
  let isTrue = 0;
  if(B[i]===2){
    count++;
  } else{
    for(let j = 2; j < B[i]; j++) {
      if(B[i]%j===0){
        isTrue = 0;
        break;
      } else {
        isTrue = 1;
        continue;
      }
    } 
    if(isTrue === 1) {
      count++;
    }
  }
}

console.log(count)