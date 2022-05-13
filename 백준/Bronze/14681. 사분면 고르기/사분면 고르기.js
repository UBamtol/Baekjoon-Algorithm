const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n').map(Number);

const A = inputData[0];
const B = inputData[1];

let num;

if(A>0 && B>0) {
  num = '1';
} else if(A<0 && B>0) {
  num = '2';
} else if(A<0 && B<0) {
  num = '3';
} else if(A>0 && B<0) {
  num = '4';
}
console.log(num);