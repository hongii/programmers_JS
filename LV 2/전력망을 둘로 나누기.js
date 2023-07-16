function solution(n, wires) {
  let gapMin = n;
  wires.forEach(([v, w]) => {
    let tree = Array.from(Array(n + 1), () => new Array());
    wires.forEach(([a, b]) => {
      if (!(a === v && b === w)) {
        tree[a].push(b);
        tree[b].push(a);
      }
    });
    let cnt = bfs(tree, n);
    let remain = n - cnt;
    if (gapMin > Math.abs(remain - cnt)) gapMin = Math.abs(remain - cnt);
  });
  return gapMin;
}

function bfs(tree, n) {
  const visited = new Array(n + 1).fill(false);
  visited[1] = true;
  let cnt = 1;
  const q = [];
  q.push(1);

  while (q.length > 0) {
    let now = q.shift();
    for (let v of tree[now]) {
      if (!visited[v]) {
        visited[v] = true;
        q.push(v);
        cnt++;
      }
    }
  }
  return cnt;
}
