const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let A = inputData;
let num = 1;
let answer = 0;

for(let i = 0; i < A.length; i++){
  switch(A[i]){
    case 'A': case 'B': case 'C':
      num = 2;
      break;
    case 'D': case 'E': case 'F':
      num = 3;
      break;
    case 'G': case 'H': case 'I':
      num = 4;
      break;
    case 'J': case 'K': case 'L':
      num = 5;
      break;
    case 'M': case 'N': case 'O':
      num = 6;
      break;
    case 'P': case 'Q': case 'R': case 'S':
      num = 7;
      break;
    case 'T': case 'U': case 'V':
      num = 8;
      break;
    case 'W': case 'X': case 'Y': case 'Z':
      num = 9;
      break;
    default:
      num = 0;
  }
  answer += num+1;
}

console.log(answer);
