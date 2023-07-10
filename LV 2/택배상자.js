function solution(order) {
  let subBelt = [];
  let res = 0;
  let pos = 0;
  for (let i = 1; i <= order.length; i++) {
    // i는 컨테이너 벨트에 위치한 박스번호 순
    if (i !== order[pos]) {
      subBelt.push(i);
    } else {
      res += 1;
      pos += 1;

      while (subBelt.length > 0) {
        if (order[pos] === subBelt.at(-1)) {
          subBelt.pop();
          res++;
          pos++;
        } else break;
      }
    }
  }

  return res;
}
