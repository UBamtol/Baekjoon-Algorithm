const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split(' ').map(Number);

let A = inputData;
let answer = Math.ceil((A[2] - A[1]) / (A[0] - A[1]));

console.log(answer);