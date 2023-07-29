function solution(dirs) {
  const direction = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let now = [0, 0];
  let dis = 0;
  let set = new Set();
  [...dirs].forEach((d) => {
    let [dx, dy] = direction[d];
    let x = now[0] + dx;
    let y = now[1] + dy;
    if (-5 <= x && x <= 5 && -5 <= y && y <= 5) {
      if (!set.has([now[0], now[1], x, y].join(""))) {
        set.add([now[0], now[1], x, y].join(""));
        set.add([x, y, now[0], now[1]].join(""));
        dis += 1;
      }
      now = [x, y];
    }
  });
  return dis;
}
