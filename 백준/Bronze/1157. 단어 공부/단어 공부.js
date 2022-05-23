const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().toUpperCase().split('');

let A = inputData;
let newA = Array.from(new Set(A));
let answer ='';
let count=0;
let max = 0;

for(let i = 0; i < newA.length; i++) {
  count = A.filter(e => newA[i] === e).length;
  if(max===count){
    answer = '?'
  } else if(max < count) {
    max = count;
    answer = `${newA[i]}`
  }
}

console.log(answer);