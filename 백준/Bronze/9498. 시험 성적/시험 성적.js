const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const grade = parseInt(inputData[0]);

switch(parseInt(grade/10)){
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}
