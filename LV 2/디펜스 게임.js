// 두번째 코드 -> 이분 탐색 이용
function solution(n, k, enemy) {
  if (enemy.length === k) return k;

  let round = 0;
  let lt = 0,
    rt = enemy.length;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let sortEnemy = enemy.slice(0, mid).sort((a, b) => b - a); // 적의 수를 내림차순으로 정렬 -> 앞부터 무적권 사용
    let check = true;
    // console.log(sortEnemy)

    // k번째까지는 무적권 사용, 그 이후 부터 n에서 차감
    let sum = 0;
    for (let i = k; i < sortEnemy.length; i++) {
      // 처치해야할 적의 수들의 합이 n을 초과하지 않는지 확인
      sum += sortEnemy[i];
      if (sum > n) {
        check = false;
        break;
      }
    }

    if (check) {
      // mid라운드 까지 처치 가능 -> 다음 라운드도 통과 가능할지 다시 이분 탐색
      lt = mid + 1;
      round = Math.max(mid, round);
    } else rt = mid - 1; // mid라운드까지 처치 불가능 -> 이전 라운드로 가서 다시 이분 탐색
  }
  return round;
}

/**첫번째 코드 -> 예제 통과, 테케 3번 10번 시간초과, 6번 런타임에러
function solution(n, k, enemy) {
  let s = [];
  let round = 0;
  // 맨 처음 무적권으로 다 통과시키고 이후 무적권으로 통과시킨 적의 수보다 현재 처치할 적의 수가 더 적다면,
  // 무적권으로 통과시킨 적이랑 바꿔치기 하는 방식
  for (let i = 0; i < enemy.length; i++) {
    if (k === 0) {
      // 무적권이 0개가 되면,
      let minE = Math.min(...s); // 이제 앞에서 무적권으로 통과시킨 적의 수들 중 가장 적은수를 뽑아냄
      if (minE > enemy[i] && n >= enemy[i]) {
        // 현재 처치해야할 적의 수와 무적권으로 통과시킨 적의 최솟값 비교
        n -= enemy[i]; // 현재 처치해야할 적의 수가 더 적다면 n에서 차감시키고 현재 적은 무적권으로 통과시키도록 함
        round++;
      } else if (minE <= enemy[i] && n >= minE) {
        // 현재 처치해야할 적의 수가 더 많은 경우, 무적권으로 통과한 최소 적의 수와 바꿔치기
        s.splice(s.indexOf(minE), 1);
        s.push(enemy[i]);
        n -= minE;
        round++;
      } else break;
    } else {
      // 먼저 무적권부터 전부 다씀
      k -= 1;
      s.push(enemy[i]);
      round++;
    }
  }
  return round;
}
*/
