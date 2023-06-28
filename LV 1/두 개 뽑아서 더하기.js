function solution(numbers) {
  // 조합
  const res = new Set();
  const combination = (numbers, i, sum, x) => {
    if (x == 2) res.add(sum);
    else {
      for (let j = i; j < numbers.length; j++) {
        combination(numbers, j + 1, sum + numbers[j], x + 1);
      }
    }
  };
  combination(numbers, 0, 0, 0);
  return [...res].sort((a, b) => a - b);
}
