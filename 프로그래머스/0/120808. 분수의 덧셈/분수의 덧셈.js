function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let numer3 = 0;
    let denom3 = 0;
    numer3 = numer1 * denom2 + numer2 * denom1;
    denom3 = denom1 * denom2;
    
    let max = parseInt(Math.max(numer3, denom3)); //큰수
    let min = parseInt(Math.min(numer3, denom3)) // 작은수
    let temp = 0;
    
    while(true){
        temp = min;
        min = max%min;
        max = temp;
        if(min === 0 ){
            break;
        }
    }
    answer.push(numer3/max,denom3/max);
    return answer;
}