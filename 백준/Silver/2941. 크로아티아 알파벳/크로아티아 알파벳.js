const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let A = inputData;
const croatiaAlp= ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for(let e of croatiaAlp) {
  A = A.split(e).join(',');
}

console.log(A.length);