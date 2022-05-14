const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim();

const A = inputData;
let answer = '';

for(let i = 1; i <= A; i++) {
  answer += i + '\n';
}
console.log(answer);