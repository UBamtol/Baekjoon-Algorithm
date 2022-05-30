const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let A = inputData;
let count = 0;
let num = 0;
let numerator = 0; // 분자
let denominator = 0; // 분모

while(true) {
  count++;
  if(A > num+count) {
    num += count;
  } else {
    if(count % 2 === 0) {
      numerator = A-num;
      denominator = (count+1)-numerator;
      break;
    } else {
      denominator = A-num;
      numerator = (count+1)-denominator;
      break;
    }
  }

}
console.log(`${numerator}/${denominator}`);