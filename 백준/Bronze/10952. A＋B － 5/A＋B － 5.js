const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

let answer = '';

for(let i = 0; i < inputData.length; i++) {
  let num = inputData[i].split(' ').map(Number);
  if(num[0]==0 && num[1]==0) {
    break;
  }
  answer += num[0] + num[1] + '\n';
}
console.log(answer);