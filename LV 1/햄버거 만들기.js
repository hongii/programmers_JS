/* 두번째 코드 -> stack활용
  주의 -> js에서 배열 인덱스 접근시(ex) arr[-2]) 음수 인덱스로 접근 불가(파이썬이랑 헷갈림), 
          대신 at()메서드로 접근 가능... */
function solution(ingredient) {
  let cnt = 0;
  let burger = [];
  for (let x of ingredient){
      burger.push(x);
      if (burger.length >= 4) {
          if (burger.at(-4) === 1 && burger.at(-3) === 2 && burger.at(-2) === 3 && burger.at(-1) === 1) {
              burger.pop(); burger.pop(); burger.pop(); burger.pop();
              cnt += 1;
          }
      }
  }
  return cnt;
}
// solution([2, 1, 1, 2, 3, 1, 2, 3, 1])



/*
첫번째 코드 -> 시간초과, slice() 사용(substr()메서드 썼을때도 시간초과)
function solution(ingredient) {
    let cnt = 0
    burger = ""
    for (let x of ingredient){
        burger += String(x);
        if (burger.slice(-4, burger.length) == "1231"){
            burger = burger.slice(0, burger.length-4)
            cnt += 1
        }
    }
    return cnt
}
*/