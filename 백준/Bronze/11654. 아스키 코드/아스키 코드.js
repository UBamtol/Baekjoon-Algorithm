const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim();

let A = inputData;

console.log(A.charCodeAt(0));