function solution(menu, order, k) {
  const enter_out = [];
  order.forEach((menuIdx, i) => {
    let time = menu[menuIdx];
    i == 0
      ? enter_out.push([i * k, i * k + time])
      : enter_out.push([i * k, Math.max(enter_out[i - 1][1], i * k) + time]);
    // 나가는 시간(=out) = max(이전 손님의 음료가 다 만들어지는 시간, 현재 손님이 입장하는 시간) + 현재손님이 주문한 음료를 만드는데 걸리는 시간(=time)
  });
  // console.log(enter_out)

  let maxCnt = 1; // 대기 최대 인원
  const waiting = [];
  let out = enter_out[0][1];
  for (let i = 1; i < enter_out.length; i++) {
    if (out > enter_out[i][0]) waiting.push(enter_out[i][1]);
    else {
      maxCnt = Math.max(waiting.length + 1, maxCnt);
      waiting.push(enter_out[i][1]);
      out = waiting.shift();
    }
  }
  return Math.max(waiting.length + 1, maxCnt);
}
