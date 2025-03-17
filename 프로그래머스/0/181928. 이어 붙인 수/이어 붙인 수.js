function solution(num_list) {
    var answer = 0;
    let even = '';
    let odd = '';
    let num_lists = [...num_list];
    for(let num of num_lists){
        if(Number(num)%2 === 0){
            even += num;
        }else {
            odd += num;
        }
    }
    answer = Number(even) + Number(odd);
    return answer;
}