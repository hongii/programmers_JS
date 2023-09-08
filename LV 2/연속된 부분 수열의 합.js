// 투포인터 -> 오름차순 정렬된 배열에서 사용
function solution(sequence, k) {
  let seqSum = 0;
  let startIdx = 0,
    endIdx = sequence.length - 1,
    seqLen = sequence.length;
  let rt = 0;
  for (let lt = 0; lt < sequence.length; lt++) {
    while (seqSum < k && rt < sequence.length) seqSum += sequence[rt++];

    if (seqSum == k) {
      if (seqLen > rt - lt) {
        seqLen = rt - lt;
        (startIdx = lt), (endIdx = rt - 1);
      }
    }
    seqSum -= sequence[lt];
  }
  return [startIdx, endIdx];
}
