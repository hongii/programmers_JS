function solution(park, routes) {
  let s = [];
  const row = park.length,
    col = park[0].length;
  const board = park.map((str, x) => {
    if (str.includes("S")) {
      let y = str.indexOf("S");
      s = [x, y];
    }
    return str.split("");
  });

  const dir = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  routes.forEach((dirStr) => {
    let [d, cnt] = dirStr.split(" ");
    const [dx, dy] = dir[d];
    let tmp = [...s];
    while (cnt) {
      let nextX = tmp[0] + dx,
        nextY = tmp[1] + dy;
      if (
        0 <= nextX &&
        nextX < row &&
        0 <= nextY &&
        nextY < col &&
        board[nextX][nextY] != "X"
      ) {
        (tmp[0] = nextX), (tmp[1] = nextY);
        cnt -= 1;
      } else break;
    }
    if (!cnt) s = [...tmp];
  });
  return s;
}
