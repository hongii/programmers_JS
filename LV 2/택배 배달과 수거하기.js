function solution(cap, n, deliveries, pickups) {
  let dist = 0;
  let del = 0,
    pick = 0;

  // 가장 마지막에 위치하는 집부터 배달 및 픽업
  for (let i = n - 1; i >= 0; i--) {
    del += deliveries[i]; // 배달 해야할 상자갯수. 이 값이 음수라면 한번의 배달로 해당 위치까지 전부 배달 가능함. 음수값 만큼 그 앞의 집에 추가로 배달 가능
    pick += pickups[i]; // 픽업 해야할 상자갯수

    while (del > 0 || pick > 0) {
      // 배달해야할 상자 혹은 픽업해야할 상자가 존재한다면,
      del -= cap; // 한번 갈 때 배달 가능한 상자갯수 만큼 빼줌
      pick -= cap; // 한번 배달했다가 돌아올 때 픽업 가능한 상자갯수 만큼 빼줌
      dist += (i + 1) * 2; // 일단 해당 위치(i+1)의 집에 배달해야 할 상자 혹은 픽업해야할 상자가 존재한다면, 거기까지 무조건 배달 기사가 도달해야함. 왕복거리라서 2를 곱해줌.
    }
  }
  return dist;
}
