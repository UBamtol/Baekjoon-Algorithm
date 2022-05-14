const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = inputData;
let answer = '';

for(let i = 1; i <= inputData[0]; i++) {
  let num = inputData[i].split(' ').map(Number);
  answer += num[0] + num[1] + '\n';
}
console.log(answer);