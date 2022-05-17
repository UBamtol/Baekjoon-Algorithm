const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = inputData[0];
const B = inputData[1].split(' ').map(Number);

let answer = '';

let max = B[0];
let min = B[0];

for(let i = 1; i < B.length; i++) {
  if(min > B[i]) {
    min = B[i];
  }
  if(max < B[i]) {
    max = B[i];
  }
}
answer += min + ' ' +max;
console.log(answer);
