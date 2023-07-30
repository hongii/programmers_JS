function solution(numbers, target) {
  let res = 0;
  const dfs = (total, i) => {
    if (i === numbers.length) {
      if (total === target) res += 1;
      return;
    }
    dfs(total + numbers[i], i + 1);
    dfs(total - numbers[i], i + 1);
  };
  dfs(0, 0);
  return res;
}
