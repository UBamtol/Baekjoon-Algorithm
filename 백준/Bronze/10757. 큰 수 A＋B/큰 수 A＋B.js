const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(' ');

let [A, B] = inputData;
let answer = '';
let num = 0;
let plus = 0;
let max = A.length > B.length ? A.length : B.length;

for(let i = 1; i <= max; i++) {
  if( A[A.length-i] === undefined) {
    num = parseInt(B[B.length-i]) + plus;
    if(num >=10){
      answer = `${num%10}` + answer;
      plus = 1;
    } else{
      answer = num + answer;
      plus = 0;
    }
  } else if(B[B.length-i] === undefined) {
    num = parseInt(A[A.length-i]) + plus;
    if(num >=10){
      answer = `${num%10}` + answer;
      plus = 1;
    } else{
      answer = num + answer;
      plus = 0;
    }
  } else {
    num = parseInt(A[A.length-i])+parseInt(B[B.length-i]) + plus;
    if(num >= 10) {
      answer = `${num%10}`+answer;
      plus = 1;
    } else if (num < 10) {
      answer = num + answer;
      plus = 0;
    }
  }
}
if(plus === 1) {
  answer = 1 + answer;
}
console.log(answer);