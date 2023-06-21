// 첫번째 코드에서 문제에 필요한 조건만 해결하는 형태로 코드를 간결화시킴
function solution(number) {
  let cnt = 0;
  const combinations = (cb, i, x) => {
    if (x == 3) {
      let sum = cb.reduce((a, b) => a + b);
      if (sum === 0) cnt += 1;
    } else {
      for (let j = i; j < number.length; j++) {
        cb.push(number[j]);
        combinations([...cb], j + 1, x + 1);
        cb.pop();
      }
    }
  };

  combinations([], 0, 0);
  return cnt;
}

/** 첫 번째 코드 -> 3개를 고르는 조합을 전부 구하는 함수를 작성
function solution(number) {
  let comb = [];
  let cnt = 0;
  function combinations(cb, i, x) {
    if (x == 3) {
      comb.push(cb);
    } else {
      for (let j = i; j < number.length; j++) {
        cb.push(number[j]);
        combinations([...cb], j + 1, x + 1);
        cb.pop();
      }
    }
  }

  combinations([], 0, 0);
  comb.forEach((cb) => {
    let sum = cb.reduce((a, b) => a + b);
    if (sum === 0) cnt += 1;
  });
  return cnt;
}
 */
