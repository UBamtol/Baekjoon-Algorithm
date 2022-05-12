const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = inputData[0];
const B = inputData[1];

let result = 0;

for(let j = 1; j <= B.length; j++){
  result += A*B[B.length-j];
  console.log(result);
  result = 0;
}
console.log(A*B);


