function solution(priorities, location) {
  priorities = priorities.map((x, i) => [x, i]);
  let maxPriority = Math.max(...priorities.map((x) => x[0]));
  let cnt = 1;
  while (priorities.length > 0) {
    let [p, i] = priorities.shift();
    if (p == maxPriority && i == location) return cnt;
    if (priorities.length > 0 && maxPriority == p) {
      maxPriority = Math.max(...priorities.map((x) => x[0]));
      cnt++;
    } else priorities.push([p, i]);
  }
}
