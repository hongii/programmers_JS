function solution(a, b, n) {
  let cnt = 0;
  while (n >= a) {
    cnt += Math.floor(n / a) * b;
    n = n - a * Math.floor(n / a) + Math.floor(n / a) * b;
  }
  return cnt;
}
