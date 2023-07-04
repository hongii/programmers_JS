function solution(maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  maps = maps.map((str) => str.split(""));

  const dfs = (i, j, d) => {
    const row = maps.length,
      col = maps[0].length;
    for (let k = 0; k < 4; k++) {
      let x = i + dx[k];
      let y = j + dy[k];
      if (0 <= x && x < row && 0 <= y && y < col && maps[x][y] !== "X") {
        let t = +maps[x][y];
        maps[x][y] = "X";
        d += dfs(x, y, t);
      }
    }
    return d;
  };

  let res = [];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== "X") {
        let t = +maps[i][j];
        maps[i][j] = "X";
        let total = dfs(i, j, t);
        res.push(total);
      }
    }
  }

  return res.length > 0 ? res.sort((a, b) => a - b) : [-1];
}
