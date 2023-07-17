const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
function solution(places) {
  places = places.map((arr) => arr.map((str) => str.split("")));
  let res = new Array(5);
  for (let x = 0; x < 5; x++) {
    let arr = places[x];
    if (arr.flat().every((s) => s !== "P")) res[x] = 1;
    else {
      const dist = Array.from(Array(5), () => new Array(5).fill(20));
      let isOk = true; // 이 부분에서 맞왜틀함 : 초기화 없이 let isOk; 라고 선언만 하니까 정답률 23퍼..왜 true로 초기화해야 하는지 모르겠..P가 하나도 없는 경우는 if문에서 걸렀는데 왜지..
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (arr[i][j] === "P") {
            isOk = bfs(i, j, dist, arr);
            if (!isOk) {
              res[x] = 0;
              break;
            }
          }
        }
        if (!isOk) break;
      }
      if (isOk) res[x] = 1;
    }
  }
  return res;
}

function bfs(i, j, dist, arr) {
  let q = [];
  q.push([i, j, 0]);
  const visited = Array.from(Array(5), () => new Array(5).fill(false));
  visited[i][j] = true;

  while (q.length > 0) {
    let [i, j, d] = q.shift();
    for (let k = 0; k < 4; k++) {
      let x = i + dx[k];
      let y = j + dy[k];
      if (0 <= x && x < 5 && 0 <= y && y < 5 && !visited[x][y]) {
        if (arr[x][y] === "P") {
          dist[x][y] = Math.min(dist[x][y], d + 1);
          if (dist[x][y] <= 2) return false;
        } else if (arr[x][y] === "O") {
          q.push([x, y, d + 1]);
          visited[x][y] = true;
        }
      }
    }
  }
  return true;
}
