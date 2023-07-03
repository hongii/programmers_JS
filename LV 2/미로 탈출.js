function solution(maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  maps = maps.map((s) => s.split(""));

  const bfs = (s, e) => {
    let q = [];
    const row = maps.length,
      col = maps[0].length;
    const time = Array.from(Array(row), () => new Array(col).fill(Infinity));
    time[s[0]][s[1]] = 0;
    q.push([s[0], s[1], 0]);
    while (q.length > 0) {
      const [x, y, t] = q.shift();
      if (x === e[0] && y === e[1]) return t;

      for (let i = 0; i < 4; i++) {
        let x_ = x + dx[i];
        let y_ = y + dy[i];
        if (
          0 <= x_ &&
          x_ < row &&
          0 <= y_ &&
          y_ < col &&
          time[x_][y_] > t + 1 &&
          ["O", "L", "E", "S"].includes(maps[x_][y_]) // S -> L로 이동할때 왔던 길을 다시 지날 수 있으므로 S를 지나갈 수 있음 주의!(테케 23번 반례)
        ) {
          time[x_][y_] = t + 1;
          q.push([x_, y_, t + 1]);
        }
      }
    }
    return -1;
  };

  let start, lever, end;
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].includes("S")) {
      let j = maps[i].indexOf("S");
      start = [i, j];
    }
    if (maps[i].includes("L")) {
      let j = maps[i].indexOf("L");
      lever = [i, j];
    }
    if (maps[i].includes("E")) {
      let j = maps[i].indexOf("E");
      end = [i, j];
    }
  }

  let t1 = bfs(start, lever);
  if (t1 === -1) return -1;

  let t2 = bfs(lever, end);
  return t2 !== -1 ? t1 + t2 : -1;
}
