function solution(n, k) {
  let convertNum = n.toString(k);
  let tmp = "";
  let cnt = 0;
  [...convertNum.toString()].forEach((num, i) => {
    if (num === "0") {
      cnt = isPrime(+tmp) ? cnt + 1 : cnt;
      tmp = "";
    } else tmp += num;
  });

  if (tmp !== "") cnt = isPrime(+tmp) ? cnt + 1 : cnt;
  return cnt;
}

function isPrime(num) {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/** 조금 더 간략한 다른사람 풀이
function isPrime(num) {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i <= +Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  // k진법으로 나눈 후 "0"을 기준으로 split
  const candidates = n.toString(k).split("0");
  // 소수 개수 세기
  return candidates.filter((v) => isPrime(+v)).length;
}
 */
