const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = inputData[0];
const set = parseInt(inputData[1]);

let [hour, min] = A.trim().split(' ').map(Number);

if(min + set > 60){
  hour += parseInt((min+set)/60);
  min = ((min+set)%60);
} else if(min + set == 60){
  hour += 1;
  min = 0;
} else if(min + set < 60){
  min += set;
}; 
if(hour > 24) {
  hour -= 24;
} else if(hour == 24) {
  hour = 0;
};

console.log(`${hour} ${min}`);

