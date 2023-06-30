// 두번째 코드 -> filter() 메서드 사용해보기
function solution(N, stages) {
  const failureRate = (nowStage) => {
    let failCnt = stages.filter((s) => s === nowStage).length;
    let passCnt = stages.filter((s) => s > nowStage).length;
    return failCnt / (failCnt + passCnt);
  };

  const res = [];
  for (let i = 1; i <= N; i++) {
    res.push([failureRate(i), i]);
  }
  res.sort((a, b) => b[0] - a[0]);
  return res.map(([rate, i]) => i);
}

/** 첫번째 코드
 * function solution(N, stages) {
    const failureRate = (stage) => {
        let failCnt = 0;
        let passCnt = 0;
        stages.forEach((s, i)=>{
            if (s === stage) failCnt++;
            else if(s > stage) passCnt++;
        })
        return failCnt/(failCnt+passCnt);
    }

    const res = [];
    for (let i=1; i<=N; i++){
        res.push([failureRate(i), i]);
    }
    res.sort((a, b)=>b[0]-a[0]);
    return res.map(([rate, i])=> i);
}
 */
