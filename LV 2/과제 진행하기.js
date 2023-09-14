function solution(plans) {
  const arr = plans.map(([name, start, playTime]) => {
    start = parseInt(start.slice(0, 2)) * 60 + parseInt(start.slice(3, 5));
    return [name, start, parseInt(playTime)];
  });
  arr.sort((a, b) => a[1] - b[1]);
  const doing = [],
    stop = [],
    res = [];
  for (let i = 0; i < arr.length; i++) {
    const [name, start, playTime] = arr[i];
    if (!doing.length) doing.push([name, start, playTime]);
    else {
      const [doingName, doingStart, doingPT] = doing.pop();
      if (doingStart + doingPT > start) {
        stop.push([doingName, doingPT - (start - doingStart)]);
        doing.push([name, start, playTime]);
      } else {
        res.push(doingName);
        let time = start - (doingStart + doingPT);
        while (stop.length > 0) {
          const [stopName, stopRemainTime] = stop.pop();
          if (time - stopRemainTime >= 0) {
            time -= stopRemainTime;
            res.push(stopName);
          } else {
            stop.push([stopName, stopRemainTime - time]);
            break;
          }
        }
        doing.push([name, start, playTime]);
      }
    }
  }
  res.push(doing[0][0]);
  while (stop.length > 0) res.push(stop.pop()[0]);
  return res;
}
