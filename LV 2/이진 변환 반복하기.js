function solution(s) {
  let zeroCnt = 0,
    step = 0;
  while (s !== "1") {
    zeroCnt += [...s].reduce((cnt, num) => (num === "0" ? cnt + 1 : cnt), 0);
    s = s.replaceAll("0", "");
    s = s.length.toString(2);
    step++;
  }
  return [step, zeroCnt];
}
