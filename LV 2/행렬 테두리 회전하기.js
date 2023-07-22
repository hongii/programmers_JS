function solution(rows, columns, queries) {
  let board = Array.from(new Array(rows), () => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      board[i][j] = i * columns + j + 1;
    }
  }

  let res = [];
  queries.forEach((site) => {
    rotation(site, board, res);
  });
  return res;
}

function rotation([x1, y1, x2, y2], board, res) {
  let side = []; // 회전시킬 부분만 시계방향으로 뽑아낼 배열
  // 위쪽 가로 테두리
  side = side.concat(board[x1 - 1].slice(y1 - 1, y2));
  // 오른쪽 세로 테두리
  for (let i = x1; i < x2 - 1; i++) side.push(board[i][y2 - 1]);
  // 아래쪽 가로 테두리
  side = side.concat(board[x2 - 1].slice(y1 - 1, y2).reverse());
  // 왼쪽 세로 테두리
  for (let i = x2 - 2; i >= x1; i--) side.push(board[i][y1 - 1]);

  side.unshift(side.pop());
  res.push(Math.min(...side));

  let sideIdx = 0;
  for (let j = y1 - 1; j < y2; j++) board[x1 - 1][j] = side[sideIdx++];
  for (let i = x1; i < x2 - 1; i++) board[i][y2 - 1] = side[sideIdx++];
  for (let j = y2 - 1; j >= y1 - 1; j--) board[x2 - 1][j] = side[sideIdx++];
  for (let i = x2 - 2; i >= x1; i--) board[i][y1 - 1] = side[sideIdx++];
}
