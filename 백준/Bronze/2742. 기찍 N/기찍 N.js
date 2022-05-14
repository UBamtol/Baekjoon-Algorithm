const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim();

const A = inputData;
let answer = '';

for(let i = A; i >= 1; i--) {
  answer += i + '\n';
}
console.log(answer);