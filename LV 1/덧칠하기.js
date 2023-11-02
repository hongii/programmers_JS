function solution(n, m, section) {
  let cnt = 1;
  let start = section[0];
  for (let i = 1; i < section.length; i++) {
    if (start + m <= section[i]) {
      cnt += 1;
      start = section[i];
    }
  }
  return cnt;
}
