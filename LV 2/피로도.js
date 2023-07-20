/** 첫번째 코드 -> index 순열을 구한 후, 피로도 계산 작업수행
let check;
let res = [];
let pm = [];
function solution(k, dungeons) {
  check = new Array(dungeons.length).fill(false);
  permutations(dungeons.length);
  let maxCnt = 0;
  pm.forEach((p) => {
    let userK = k;
    let cnt = 0;
    for (let i = 0; i < p.length; i++) {
      if (userK >= dungeons[p[i]][0]) {
        userK -= dungeons[p[i]][1];
        cnt++;
      } else break;
    }
    maxCnt = cnt > maxCnt ? cnt : maxCnt;
  });
  return maxCnt;
}

function permutations(n) {
  if (check.every((a) => a)) pm.push([...res]);
  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      check[i] = true;
      res.push(i);
      permutations(n);
      check[i] = false;
      res.pop();
    }
  }
}
 */

// 두번째 풀이 -> dfs로 index 순열을 구함과 동시에 바로 피로도 계산하기
let check;
let maxCnt = 0;
function solution(k, dungeons) {
  check = new Array(dungeons.length).fill(false);
  dfs(dungeons, k, 0);
  return maxCnt;
}

function dfs(dungeons, userK, cnt) {
  maxCnt = Math.max(maxCnt, cnt);

  for (let i = 0; i < dungeons.length; i++) {
    if (!check[i] && userK >= dungeons[i][0]) {
      check[i] = true;
      dfs(dungeons, userK - dungeons[i][1], cnt + 1);
      check[i] = false;
    }
  }
}
