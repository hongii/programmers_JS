function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  let i = 1,
    comp = days[0];
  const res = [];
  let cnt = 1;
  while (i < days.length) {
    if (comp >= days[i]) cnt++;
    else {
      res.push(cnt);
      comp = days[i];
      cnt = 1;
    }
    i++;
  }
  if (cnt > 0) res.push(cnt);
  return res;
}
