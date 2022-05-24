const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(' ');

let A = inputData;
let count = A.filter(e => e === '' || e ==='\n').length;

console.log(A.length - count);
