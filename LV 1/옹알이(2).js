// 다시 풀어보기
function solution(babbling) {
  const words = [ "aya", "ye", "woo", "ma" ];
  let cnt = 0;
  babbling.forEach((s) => {
      words.forEach((w) => {
          if (!s.includes(w.repeat(2))) {
              s = s.replaceAll(w, " ");
          }
      })
      if (s.trim() === "") cnt += 1;
  })
  return cnt;
}
