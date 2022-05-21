let answer = '';
function d(n) {
    let num = n;
    let result = 0;

    for( let i = 0; i < String(n).length; i++) {
        result += num % 10;
        num = Math.floor(num / 10);
    }
    return n + result
}

let selfNumber = Array(10000+1).fill(true);

for(let i = 0; i <= 10000; i++) {
  selfNumber[d(i)] = false;
}

for( let i = 0; i < 10000; i++) {
  if(selfNumber[i]) {
    answer += i + '\n';
  }
}
console.log(answer);