function solution(code) {
    var answer = '';
    let mode = 0;
    let ret = '';
    let codes = [...code];

    codes.forEach((code, idx)=>{
        if(code === '1'){
            mode = Number(!Boolean(mode));
        } else if(mode === 0 && idx % 2 === 0){
            ret += code;
        } else if(mode === 1 && idx % 2 !== 0) {
            ret += code;
        }
    })
    if(ret === '') {
        answer = 'EMPTY';
    } else {
        answer = ret;    
    }
    
    return answer;
}

