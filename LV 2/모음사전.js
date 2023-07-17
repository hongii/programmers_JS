/** bfs 풀이 -> 너비순으로 중복 순열을 구하기 때문에 사전순 정렬과정이 필요하다. */
function solution(word) {
  const alpha = ["A", "E", "I", "O", "U"];
  let res = bfs(alpha);
  console.log(res.length);
  return res.indexOf(word) + 1;
}
function bfs(alpha) {
  let res = [];
  let q = [];
  q.push(["", 0]);
  while (q.length > 0) {
    let [str, len] = q.shift();
    if (len >= 5) break;
    for (let i = 0; i < alpha.length; i++) {
      q.push([str + alpha[i], len + 1]);
      res.push(str + alpha[i]);
    }
  }
  return res.sort();
}

/** dfs 풀이 -> 중복 순열 구할 때, 사전 순으로 바로 저장이 가능하다. */
let idx = 1;
function solution(word) {
  const alpha = ["A", "E", "I", "O", "U"];
  let res = {};
  dfs(res, alpha, "", 0);
  return res[word];
}
function dfs(res, alpha, str, cnt) {
  if (cnt == 5) return;
  for (let i = 0; i < alpha.length; i++) {
    res[str + alpha[i]] = idx++;
    dfs(res, alpha, str + alpha[i], cnt + 1);
  }
}
console.log(solution("EIO"));
