const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim();

const A = inputData;

let result=0;
for(let i = 1; i <= A; i++) {
  result += i;
}
console.log(result);
