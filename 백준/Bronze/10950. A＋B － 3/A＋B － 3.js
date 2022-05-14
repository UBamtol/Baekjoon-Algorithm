const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = inputData;

for(let i = 1; i <= inputData[0]; i++) {
  let num = inputData[i].split(' ').map(Number);
  console.log(num[0] + num[1]);
}