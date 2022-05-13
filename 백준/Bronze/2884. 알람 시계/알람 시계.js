const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ').map(Number);

let hour = inputData[0];
let min = inputData[1];

if(min-45 < 0){
  min = 60-(45-min);
  if(hour == 0){
    hour = 24 - 1;
  } else if(hour > 0){
    hour -= 1;
  }
} else if(min-45 >= 0){
  min -= 45;
};
console.log(hour + ' ' +min);