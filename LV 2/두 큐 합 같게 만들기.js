function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, num) => acc + num);
  let sum2 = queue2.reduce((acc, num) => acc + num);
  if ((sum1 + sum2) % 2 !== 0) return -1;

  let cnt = 0,
    maxCnt = (queue1.length + queue2.length) * 2;
  let s1 = 0,
    s2 = 0;
  while (sum1 !== sum2 && cnt < maxCnt) {
    if (sum1 > sum2) {
      let num = queue1[s1++];
      queue2.push(num);
      sum1 -= num;
      sum2 += num;
    } else {
      let num = queue2[s2++];
      queue1.push(num);
      sum2 -= num;
      sum1 += num;
    }
    cnt += 1;
  }
  return cnt !== maxCnt ? cnt : -1;
}

/* 첫번째 코드 -> 예제 통과, 제출 시 테케 4개에서 시간초과
function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, num) => acc + num);
  let sum2 = queue2.reduce((acc, num) => acc + num);
  console.log(sum1, sum2);
  if ((sum1 + sum2) % 2 !== 0) return -1;

  let cnt = 0;
  let maxCnt = (queue1.length + queue2.length) * 2;
  let mid = (sum1 + sum2) / 2;
  while (sum1 !== sum2 && cnt < maxCnt) {
    if (sum1 > sum2) {
      let num = queue1.shift();
      queue2.push(num);
      sum1 -= num;
      sum2 += num;
    } else {
      let num = queue2.shift();
      queue1.push(num);
      sum2 -= num;
      sum1 += num;
    }
    cnt += 1;
  }
  return cnt !== maxCnt ? cnt : -1;
}
*/
