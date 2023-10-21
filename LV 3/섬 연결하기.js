// 크루스칼 알고리즘 -> 가장 비용이 적은 간선부터 확인.
// Tip) 비용이 적은 간선부터 하나씩 확인하므로, 인접리스트 사용하지 않고 엣지 리스트로 구현!
function solution(n, costs) {
  const parent = new Array(n).fill(0).map((x, i) => i);

  const findParent = (x) => {
    if (parent[x] != x) {
      parent[x] = findParent(parent[x]);
    }
    return parent[x];
  };
  const union = (x, y) => {
    let rootX = findParent(x);
    let rootY = findParent(y);
    if (rootX < rootY) parent[rootY] = rootX;
    else parent[rootX] = rootY;
  };

  let res = 0;
  costs.sort((a, b) => a[2] - b[2]);
  costs.forEach(([x, y, w]) => {
    if (findParent(x) !== findParent(y)) {
      union(x, y);
      res += w;
    }
  });
  return res;
}
