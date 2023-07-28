// list(배열) 이용한 풀이
function solution(s) {
  s = s.slice(2, -2).split("},{");
  s = s.map((str) => str.split(","));
  s.sort((a, b) => a.length - b.length);

  let res = [parseInt(s[0])];
  for (let i = 1; i < s.length; i++) {
    let nextNum = s[i].find((numStr) => !s[i - 1].includes(numStr));
    res.push(+nextNum);
  }
  return res;
}

// 집합 Set 이용한 풀이
function solution(s) {
  s = s.slice(2, -2).split("},{");
  s = s.map((str) => new Set(str.split(",")));
  s.sort((a, b) => a.size - b.size);

  let firstNum = parseInt([...s[0]][0]);
  let res = [firstNum];
  for (let i = 1; i < s.length; i++) {
    let nextNum = [...s[i]].find((a) => !s[i - 1].has(a));
    res.push(+nextNum);
  }
  return res;
}
