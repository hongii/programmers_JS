function solution(board, moves) {
  const n = board.length;
  // cntMap 초기화, key는 col위치(0~n-1)
  const cntMap = new Map();
  for (let i = 0; i < n; i++) {
    cntMap.set(i, 0);
  }

  // 각 col 위치에 존재하는 인형 갯수 넣기 -> x좌표 구하는 용으로 사용함
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 0) cntMap.set(j, cntMap.get(j) + 1);
    }
  }

  let res = [];
  let cnt = 0;
  for (let num of moves) {
    let y = num - 1;
    let x = n - cntMap.get(y);
    if (x === n) continue; // (x, y)위치에 인형이 하나도 없는 경우

    cntMap.set(y, cntMap.get(y) - 1);
    res.push(board[x][y]);
    if (res.length >= 2 && res.at(-1) === res.at(-2)) {
      res.pop();
      res.pop();
      cnt += 2;
    }
  }
  return cnt;
}

/** 두번째 풀이 -> 파이썬으로 풀었던 풀이 이용
function solution(board, moves) {
    const n = board.length;
    let res = [];
    let cnt = 0;
    for (let num of moves) {
        for (let i=0; i<n; i++){
            let j = num-1;
            if (board[i][j] > 0){
                res.push(board[i][j]);
                board[i][j] = 0;
                break;
            }
        }
        if (res.length >= 2 && res.at(-1) === res.at(-2)){
            res.pop();
            res.pop();
            cnt += 2;   
        }
    }
    return cnt;
}
 */
