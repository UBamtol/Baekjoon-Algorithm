const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split('\n').map(v=> v.trim());

let [A, ...B] = inputData;
let answer = 0;

for(let i = 0; i < A; i++) {
  let word = [];
  let isGroup = true;

  for(let j = 0; j < B[i].length; j++) {
    if(word.indexOf(B[i][j]) === -1) {
      word.push(B[i][j]);
    } else if(word.indexOf(B[i][j]) !== word.length-1) {
      isGroup = false;
      break;
    }
  }
  if(isGroup) {
    answer += 1;
  }
}

console.log(answer);
