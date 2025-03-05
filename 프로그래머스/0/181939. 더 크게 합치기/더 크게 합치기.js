function solution(a, b) {
    var answer = 0;
    a = a+''
    b= b+''
    
    if(a+b > b+a || a === b){
        answer = Number(a+b);
    } else {
        answer = Number(b+a);
    }
    return answer;
}