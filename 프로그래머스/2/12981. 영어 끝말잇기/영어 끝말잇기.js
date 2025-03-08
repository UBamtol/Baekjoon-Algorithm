function solution(n, words) {
    var answer = [];
    let array = [];
    let mans=0;
    
    for(let i = 0; i < words.length;i++){
        if(mans < n){
           mans += 1; 
        } else {
            mans = 1;
        }
        array.push([mans,words[i]])
    }
    for(let i = 0; i < words.length-1; i++){
        if(words.slice(0,i+1).includes(array[i+1][1]) || (words[i][words[i].length-1] !== words[i+1][0])){
            answer = [array[i+1][0], Math.ceil((i+2)/n)];
            break;
        } else if(i+1 === array.length-1 && array[i][1] !== array[i+1][1]){
            answer = [0,0]
            break;
        } 
    }    

    return answer;
}