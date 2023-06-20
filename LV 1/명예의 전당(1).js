function solution(k, score) {
  let topK = [],
    res = [];
  score.forEach((s, i) => {
    if (i < k) {
      topK.push(s);
      res.push(Math.min(...topK));
    } else {
      if (Math.min(...topK) < s) {
        topK.splice(topK.indexOf(Math.min(...topK)), 1);
        topK.push(s);
        res.push(Math.min(...topK));
      } else {
        res.push(Math.min(...topK));
      }
    }
  });
  return res;
}

/* 다른 사람 풀이 -> reduce메서드 사용. stack활용하면서 스택에 원소를 넣을때 마다 오름차순 정렬해주고, 최솟값 빼낼땐 shift()사용
function solution(k, score) {
  const stack = [] // topK배열 역할
  return score.reduce((a,c) => {
      if(stack.length < k) {
          stack.push(c)
          stack.sort((a,b) => a - b)
      }
      else {
          stack.push(c)
          stack.sort((a,b) => a - b)
          stack.shift()
      }
      a.push(stack[0])
      return a // 배열a가 다음 reduce 반복 순서의 a인자로 들어감 -> 최종적으로는 가장 최저 점수들만 들어간 배열을 return함
  },[])
}

*/
