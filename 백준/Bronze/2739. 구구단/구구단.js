const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim();

let A = inputData[0];

for(let i = 1; i < 10; i++) {
  console.log(`${A} * ${i} = ${A*i}`);
}