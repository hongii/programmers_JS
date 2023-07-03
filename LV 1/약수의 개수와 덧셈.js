function solution(left, right) {
  const divisorCnt = (num) => {
    let cnt = 0;
    for (let i = 1; i < parseInt(Math.sqrt(num)) + 1; i++) {
      if (num % i === 0) {
        cnt += 2;
        if (i === Math.sqrt(num)) cnt--;
      }
    }
    return cnt;
  };

  let res = 0;
  for (let i = left; i <= right; i++) {
    divisorCnt(i) % 2 === 0 ? (res += i) : (res -= i);
  }
  return res;
}

/**
 * 다른 사람 풀이 -> "제곱근이 정수면 약수의 개수가 홀수다"를 이용한 풀이
 * function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
 */
