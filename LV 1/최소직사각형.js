function solution(sizes) {
  const arrW = sizes.map(([a, b]) => (a < b ? a : b));
  const arrH = sizes.map(([a, b]) => (a < b ? b : a));
  return Math.max(...arrW) * Math.max(...arrH);
}
