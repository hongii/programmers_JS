function solution(n) {
  let rem = "";
  while (n > 0) {
    rem += String(n % 3);
    n = Math.floor(n / 3);
  }
  rem = [...rem].reverse();
  let res = rem.reduce((acc, cur, i) => acc + parseInt(cur) * 3 ** i, 0);
  return res;
}

/**
 * 다른 사람 풀이
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
 */

/**
 * toString() & parseInt() 의 조합 -> 진법 변형 가능
 * 1) 10진수 -> n진수 문자열로 변형 : num.toString(n)
 *   ex) let num = 8;
 *       console.log(num.toString(2)); // 1000
 *       console.log(num.toString(3)); // 22
 *
 * 2) n진수 문자열 -> 10진수 :
 *   ex) let bin = "1011";
 *       console.log(parseInt(bin, 2)); // 11
 *   ex) let tri = "2122";
 *       console.log(parseInt(tri, 3)); // 71
 *
 * 3) n진수 -> n진수
 *   ex) parseInt("21121",3).toString(2); // 11001101
 *                                        // "21121"이라는 3진수를 10진수로 바꾸고 이를 다시 2진수로 바꾼 값.
 *                                        // 즉, 3진수 "21121"을 2진수로 변형하는 방법
 */
