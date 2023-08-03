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

/* 더 효율적인 풀이 -> 시간 절약 */
function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) i++;
  return i;
}
// * 코드 해설 *
// 논문 인용횟수를 내림차순으로 정렬
// 자신의 인용횟수(cittations[i])가 자신보다 인용횟수가 많은 논문 수(i) 보다 많으면 정답 수를 1 증가시킴
// 자신의 인용횟수가 자신보다 인용횟수가 많은 논문 수와 같아 질때의 i를 return하면 정답
