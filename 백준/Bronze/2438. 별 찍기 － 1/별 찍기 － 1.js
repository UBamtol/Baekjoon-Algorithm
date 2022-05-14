const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim();

let answer = '';

for(let i = 1; i <= inputData; i++) {
  for(let j = 0; j < i; j++) {
    answer += '*';
  }
  answer += '\n';
}
console.log(answer);