function solution(n, m, hole) {
  const board = Array.from(Array(m), () => new Array(n).fill(1));
  // console.log(board);
  for (let [y, x] of hole) {
    board[x - 1][y - 1] = 0;
  }

  const check = (x, y, n, m) => {
    if (0 <= x && x < m && 0 <= y && y < n) return true;
    return false;
  };

  const bfs = (n, m, board) => {
    const dx = [-1, 0, 1, 0],
      dy = [0, 1, 0, -1];
    const timeUsedShoes = Array.from(Array(m), () =>
      new Array(n).fill(Infinity)
    );
    const time = Array.from(Array(m), () => new Array(n).fill(Infinity));
    (time[0][0] = 0), (timeUsedShoes[0][0] = 0);
    const q = [[0, 0, 0]];

    while (q.length) {
      let [x, y, used] = q.shift();

      for (let i = 0; i < 4; i++) {
        let x_ = x + dx[i];
        let y_ = y + dy[i];
        if (used) {
          if (
            check(x_, y_, n, m) &&
            board[x_][y_] &&
            timeUsedShoes[x_][y_] > timeUsedShoes[x][y] + 1
          ) {
            timeUsedShoes[x_][y_] = timeUsedShoes[x][y] + 1;
            q.push([x_, y_, used]);
          }
        } else {
          if (
            check(x_, y_, n, m) &&
            board[x_][y_] &&
            time[x_][y_] > time[x][y] + 1
          ) {
            time[x_][y_] = time[x][y] + 1;
            q.push([x_, y_, used]);
          }

          let xx_ = x_ + dx[i],
            yy_ = y_ + dy[i];
          if (
            check(xx_, yy_, n, m) &&
            board[xx_][yy_] &&
            timeUsedShoes[xx_][yy_] > time[x][y] + 1
          ) {
            timeUsedShoes[xx_][yy_] = time[x][y] + 1;
            q.push([xx_, yy_, 1]);
          }
        }
      }
    }
    return Math.min(time[m - 1][n - 1], timeUsedShoes[m - 1][n - 1]);
  };
  const res = bfs(n, m, board);
  return res !== Infinity ? res : -1;
}
