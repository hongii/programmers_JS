// 기본 테케 통과, 제출시 정확성 33.3점, 효율성 0점...미완성 코드
function solution(land) {
  const row = land.length,
    col = land[0].length;
  const visited = Array.from(Array(row), () => new Array(col).fill(0));
  const bfs = (i, j, land) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const q = [];
    q.push([i, j]);
    visited[i][j] = 1;
    let cnt = 1;
    const check = [];
    while (q.length) {
      let [x, y] = q.shift();
      for (let a = 0; a < 4; a++) {
        let x_ = x + dx[a];
        let y_ = y + dy[a];
        if (
          0 <= x_ &&
          x_ < row &&
          0 <= y_ &&
          y_ < col &&
          land[x_][y_] &&
          visited[x_][y_] == 0
        ) {
          visited[x_][y_] = 1;
          cnt += 1;
          q.push([x_, y_]);
          check.push([x_, y_]);
        }
      }
    }
    return [cnt, check];
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (land[i][j] && visited[i][j] == 0) {
        let [total, site] = bfs(i, j, land);
        visited[i][j] = total;
        site.forEach(([x, y]) => {
          visited[x][y] = total;
        });
      }
    }
  }

  // console.log(visited)
  let maxRes = 0;
  for (let j = 0; j < col; j++) {
    let res = 0;
    for (let i = 0; i < row; i++) {
      if (i == 0 && visited[i][j]) res += visited[i][j];
      else if (i > 0 && visited[i][j] && visited[i - 1][j] != visited[i][j]) {
        res += visited[i][j];
      }
    }
    maxRes = Math.max(maxRes, res);
  }
  return maxRes;
}
