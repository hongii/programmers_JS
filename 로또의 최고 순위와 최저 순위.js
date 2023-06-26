function solution(lottos, win_nums) {
  let zeroCnt = 0;
  let sameCnt = 0;
  const order = {
    // key: value => "일치하는 갯수: 등수"
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  lottos.forEach((num, i) => {
    if (num === 0) zeroCnt++;
    else if (win_nums.includes(num)) sameCnt++;
  });
  return [order[zeroCnt + sameCnt], order[sameCnt]];
}
