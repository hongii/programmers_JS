// 두번째 코드 -> 문자열 사용
function solution(n, t, m, p) {
  let numStr = "";
  let res = "";
  let idx = p - 1;
  for (let num = 0; num < t * m; num++) {
    numStr += num.toString(n).toUpperCase();
    while (idx < numStr.length) {
      res += numStr[idx];
      idx += m;
      if (res.length === t) return res;
    }
  }
}

/** 첫번째 코드 -> list를 사용 -> 시간 오래 걸림
function solution(n, t, m, p) {
  let numList = [];
  let res = [];
  let idx = p - 1;
  for (let num = 0; num < t * m; num++) {
    numList = numList.concat(num.toString(n).toUpperCase().split(""));
    while (idx < numList.length) {
      res.push(numList[idx]);
      idx += m;
      if (res.length === t) return res.join("");
    }
  }
}
 */
