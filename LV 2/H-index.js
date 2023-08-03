function solution(citations) {
  let maxCiti = Math.max(...citations);
  for (let H_index = maxCiti; H_index >= 0; H_index--) {
    let cnt = citations.reduce(
      (cnt, num) => (num >= H_index ? cnt + 1 : cnt),
      0
    );
    if (cnt >= H_index) return H_index;
  }
}
