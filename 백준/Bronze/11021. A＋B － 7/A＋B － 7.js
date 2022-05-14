const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

let answer = '';
let result = 0;
for(let i = 1; i <= inputData[0]; i++) {
  let num = inputData[i].split(' ').map(Number);
  result = num[0] + num[1];
  answer += 'Case #' + [i] + ': ' + result + '\n';
}
console.log(answer);