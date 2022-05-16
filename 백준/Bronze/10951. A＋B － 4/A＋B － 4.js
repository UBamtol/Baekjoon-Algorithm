const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

for(let i = 0; i < inputData.length; i++) {
  let num = inputData[i].split(' ').map(Number);
  console.log(num[0] + num[1]);
}