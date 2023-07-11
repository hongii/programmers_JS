function solution(cards) {
  let lenArr = [];
  let idx = 0;
  let cnt = 0;
  cards.forEach((card, i) => {
    if (card !== 0) {
      idx = card - 1;
      cards[i] = 0;
      cnt = 1;

      while (cards[idx] !== 0) {
        cnt++;
        let next = cards[idx];
        cards[idx] = 0;
        idx = next - 1;
      }
      lenArr.push(cnt);
    }
  });
  lenArr.sort((a, b) => b - a);
  return lenArr.length >= 2 ? lenArr[0] * lenArr[1] : 0;
}
