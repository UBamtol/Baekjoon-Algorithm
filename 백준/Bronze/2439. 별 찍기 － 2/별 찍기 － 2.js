const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim();

let answer = '';

for(let i = 1; i <= inputData; i++) {
  for(let j = inputData-i; j > 0; j--) {
    answer += ' ';
  }
  for(let k = 0; k < i; k++){
    answer += '*';
  }
  answer += '\n';
}
console.log(answer);