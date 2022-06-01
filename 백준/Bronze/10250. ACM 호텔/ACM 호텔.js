const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split('\n');

let [A, ...B] = inputData;
B = B.map(v=>v.trim().split(' '));
let H, W, N;
let x = 0;
let y = 0;
let room = '';
let answer = '';

for(let i = 0; i < A; i++) {
  H = B[i][0];
  W = B[i][1];
  N = B[i][2];

  x = Math.ceil(N/H);
  if(N%H==0){
    y=H;
  } else{
    y = N%H;
  }
  if(x>9){
    room = `${y}${x}`;
  }else{
    room = `${y}0${x}`;
  }
  answer += room +'\n';
}
console.log(answer);