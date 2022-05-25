const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(' ');

let A = inputData;
let reverseA = [];
let answer = '';

for( let i=0; i < A.length; i++){
  reverseA[i] = A[i].toString().split('').reverse().join('');
} 
reverseA[0] < reverseA[1] ? answer += reverseA[1] : answer += reverseA[0];

console.log(answer);
