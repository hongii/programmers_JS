function solution(n, left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    let x = Math.floor(i / n);
    let y = i % n;
    res.push(Math.max(x, y) + 1);
  }
  return res;
}
