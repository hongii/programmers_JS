function solution(number, limit, power) {
  let res = 0;
  for (let i=1;i<=number;i++){
      let cnt = 0
      // 약수의 갯수 구하기
      for (let j=1; j<parseInt(i**0.5)+1; j++){
          if (i % j === 0) {
              cnt += 1
              if (j !== parseInt(i/j)) cnt += 1;
          }
      }
      if (cnt > limit) res += power;
      else res += cnt;
  }
  return res
}