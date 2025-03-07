function solution(cards) {
  var answer = 0;
  let visited = Array.from({ length: cards.length + 1 }, () => 0);
  let isVisited;
  let array = [];
  function check(count, n) {
    if (visited[n] !== 1) {
      visited[n] = 1;
      array[count-1].push(cards[n-1])
      check(count, cards[n - 1]);
    }
  }
  let i = 0;
  while(true) {
    isVisited = visited.findIndex((e, index) => index > 0 && e !== 1);
    if(isVisited !== -1){
        i++;
        array.push([]) 
        check(i, isVisited); 
    } else {
        break;
    }     
  }
  if(array.length > 1){
      array.sort((a,b)=> b.length - a.length);
      answer = array[0].length * array[1].length;
  } else {
      answer = 0;  
  }
  return answer;
}
