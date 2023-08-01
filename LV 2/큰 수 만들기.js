function solution(number, k) {
  let s = [];
  [...number].forEach((num) => {
    while (s.length > 0 && k > 0 && s.at(-1) < num) {
      s.pop();
      k--;
    }
    s.push(num);
  });
  s = k > 0 ? s.slice(0, s.length - k) : s;
  return s.join("");
}
