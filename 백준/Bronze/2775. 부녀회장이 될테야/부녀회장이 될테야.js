const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().trim().split('\n');

let [A, ...B] = inputData;

B=B.map(v=>parseInt(v.trim()));

let answer = '';

for(let i = 0; i < A; i++) {
  let k = B.shift();
  let n = B.shift();
  let person = [];
  let sum = 0;

  // 1층 3명, 2층 3명
  for(let i = 0; i < k; i++) { //층수
    person.push([1]); // 모든 층의 첫 호수는 1로 초기화
    for(let j = 1; j < n; j++) { // 호수
      if(i===0){ // 0층일 경우 호수는 1~n까지 초기화
        person[i].push(j+1);
      } else {
        person[i].push(person[i][j-1] + person[i-1][j]);
      }
    }
  }
  sum = person[person.length-1].reduce((a,b) => a+b);
  answer += sum + ('\n');
}
console.log(answer);