function solution(ineq, eq, n, m) {
    var answer = 0;
    if(ineq === '>'){
        if(eq === '='){
            answer = n >= m;
        } else if(eq === '!'){
            answer = n > m;
        }
    } else if(ineq === '<'){
        if(eq === '='){
            answer = n <= m;
        } else if(eq === '!'){
            answer = n < m;
        }
    }

    return Number(answer);
}