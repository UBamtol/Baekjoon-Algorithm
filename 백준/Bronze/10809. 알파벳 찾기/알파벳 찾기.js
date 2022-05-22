const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let A= inputData;
let answer = '';

for( let i = 97; i <= 122; i++) {
  if(A.includes(String.fromCharCode(i))){
    answer += A.indexOf(String.fromCharCode(i)) + ' ';
  } else {
    answer += -1 + ' ';
  }
}

console.log(answer);