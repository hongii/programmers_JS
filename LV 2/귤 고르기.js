function solution(k, tangerine) {
  let counter = new Map();
  tangerine.forEach((num) => {
    if (counter.has(num)) counter.set(num, counter.get(num) + 1);
    else counter.set(num, 1);
  });

  let sortCounter = [...counter.entries()].sort((a, b) => b[1] - a[1]);
  let totalCnt = 0;
  let res = 0;
  while (totalCnt < k) {
    totalCnt += sortCounter[res][1];
    res += 1;
  }
  return res;
}
