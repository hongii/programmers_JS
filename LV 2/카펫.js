function solution(brown, yellow) {
  let div = [];
  const divisor = (total, yellow) => {
    for (let i = 1; i <= Math.floor(total / 2); i++) {
      if (total % i === 0 && i - 2 > 0) {
        let yellow_h = i - 2;
        let yellow_w = total / i - 2;
        if (yellow_h * yellow_w === yellow) return [yellow_w + 2, yellow_h + 2];
      }
    }
  };
  return divisor(brown + yellow, yellow);
}
