function solution(s){
    var answer = true;
    let count = 0;
    for(let i of s){
       count += i === '(' ? 1 : -1;
        if(count < 0){
            answer = false;
            break;
        }
    }
    if(count !== 0){
        answer = false;
    }
    return answer;
}