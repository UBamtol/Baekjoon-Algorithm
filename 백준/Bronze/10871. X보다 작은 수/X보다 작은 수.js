const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const N = inputData[0].split(' ').map(Number);
const X = inputData[1].split(' ').map(Number);

let answer = '';

for(let i = 0; i < N[0]; i++) {
  if(X[i] < N[1]) {
    answer += X[i] + ' ';
  }
}
console.log(answer);