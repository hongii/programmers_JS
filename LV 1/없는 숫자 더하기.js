function solution(numbers) {
  const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return range.reduce(
    (pre, cur) => (!numbers.includes(cur) ? pre + cur : pre),
    0
  );
}
