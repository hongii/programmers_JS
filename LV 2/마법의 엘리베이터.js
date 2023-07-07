function solution(storey) {
  let cnt = 0;
  while (storey > 0) {
    let rem = storey % 10; // 마지막 자리 숫자
    let next = (storey / 10) % 10; // 마지막 바로 앞자리의 숫자
    if (rem > 5 || (rem == 5 && next >= 5)) {
      // +버튼 눌러서 위층으로 이동
      cnt += 10 - rem;
      storey += 10 - rem;
    } else {
      // -버튼 눌러서 아래층으로 이동
      cnt += rem;
    }
    storey = Math.floor(storey / 10);
  }
  return cnt;
}
