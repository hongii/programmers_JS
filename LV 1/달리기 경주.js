/* 첫번째 코드 -> 테케 10 ~ 13번 시간초과 */
function solution(players, callings) {
  const rank = [];
  players.forEach((player, idx) => {
    rank.push(player);
  });

  callings.forEach((call, _) => {
    let idx = rank.indexOf(call);
    [rank[idx], rank[idx - 1]] = [rank[idx - 1], rank[idx]]; // 구조분해 할당으로 swap
  });
  return rank;
}

/* 두번째 코드 -> 통과 */
function solution(players, callings) {
  const rank = new Map();
  const res = [];
  players.forEach((player, idx) => {
    rank.set(player, idx);
    res.push(player);
  });

  callings.forEach((call) => {
    let nowRank = rank.get(call);
    rank.set(call, nowRank - 1);
    rank.set(res[nowRank - 1], nowRank);
    [res[nowRank], res[nowRank - 1]] = [res[nowRank - 1], res[nowRank]]; // 구조분해 할당으로 swap
  });
  return res;
}
