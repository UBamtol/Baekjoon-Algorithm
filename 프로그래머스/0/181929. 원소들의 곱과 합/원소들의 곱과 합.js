function solution(num_list) {
    var answer = 0;
    let sum = num_list.reduce((acc, cur)=>{
        return acc + cur;
    })
    let times = num_list.reduce((acc, cur)=> {
        return acc * cur
    });
    if(times < sum**2){
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}