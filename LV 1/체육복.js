// 첫번째 코드
function solution(n, lost, reserve) {
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  const map = new Map();
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) continue;
    map.set(reserve[i], 1);
  }

  let cnt = n - lost.length + (reserve.length - map.size);
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) continue;
    else if (map.has(lost[i] - 1)) {
      map.delete(lost[i] - 1);
      cnt++;
    } else if (map.has(lost[i] + 1)) {
      map.delete(lost[i] + 1);
      cnt++;
    }
  }
  return cnt;
}

/** 파이썬으로 풀었던 풀이를 js로 바꾼 코드
 * function solution(n, lost, reserve) {
    const lostSorted = lost.filter((stu) => !reserve.includes(stu)).sort((a, b) => a-b);
    const reserveSorted = reserve.filter((stu) => !lost.includes(stu)).sort((a, b) => a-b);

    const check = new Array(n+1).fill(0);
    for (let i=0; i<reserveSorted.length; i++){
        check[reserveSorted[i]] = 1;
    }
    
    let res = n - lostSorted.length;
    lostSorted.forEach((stu, i) => {
        if (stu !== 1 && check[stu-1] === 1){
            check[stu-1] = 0;
            res++;
        }
        else if (stu !== n && check[stu+1] === 1) {
            check[stu+1] = 0;
            res++;
        }
    })
    return res;
}
 */
