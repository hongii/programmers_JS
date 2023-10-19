/* 파이썬에서는 최소힙(heapq)쓰면 금방 끝나는데.. js에서는 우선순위 큐 문제를 대부분 이진탐색으로 해결하는 듯..(내가 푼 문제들 기준으로) 
같이 보면 좋을 문제 : LV 2. 디펜스 게임- https://school.programmers.co.kr/learn/courses/30/lessons/142085 */
function solution(ability, number) {
  ability.sort((a, b) => b - a); // 내림차순
  while (number > 0) {
    let sum = ability.pop() + ability.pop();
    let lt = 0,
      rt = ability.length - 1;
    while (lt <= rt) {
      // 내림차순 정렬된 ability에서의 이진탐색
      let mid = Math.floor((lt + rt) / 2);
      if (ability[mid] >= sum) lt = mid + 1;
      else rt = mid - 1;
    }
    ability.splice(lt, 0, sum, sum);
    console.log(ability, lt, rt);
    number -= 1;
  }
  return ability.reduce((acc, x) => acc + x, 0);
}
