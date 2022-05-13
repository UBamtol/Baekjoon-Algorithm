const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);

const A = inputData[0];
const B = inputData[1];
const C = inputData[2];

let price = 0;
let max = inputData[0];
let same;

if( A === B && B === C && C === A ){
  price = 10000 + A * 1000;
} else if( A === B || B === C || C === A ) {
  for(let i = 0; i < inputData.length; i++){
    for(let j = i+1; j < inputData.length; j++){
      if(inputData[i] === inputData[j]) {
        same = inputData[i]
      }
    }
  }
  price = 1000 + same * 100;
} else if ( A !== B && B !== C && C !== A ) {
  for(let i = 0; i < inputData.length; i++){
    if(inputData[i] > max){
      max = inputData[i];
    }
  }
  price = max * 100;
}
console.log(price);