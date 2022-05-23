const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split('\n');

let [A, ...B]= inputData;
let answer ='';
B = B.map(v=>v.trim().split(' '))

for(let i = 0; i < A; i++) {
  let word = B[i][1];
  for(let j = 0; j < B[i][1].length; j++) {
    answer += word[j].repeat(B[i][0]);
  }
  answer += '\n'
}
console.log(answer);