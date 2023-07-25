function solution(orders, course) {
  let res = [];
  for (let i = 0; i < course.length; i++) {
    const maps = new Map();
    for (let j = 0; j < orders.length; j++) {
      orders[j] = [...orders[j]].sort();
      if (orders[j].length < course[i]) continue;
      combination(orders[j], course[i], maps);
    }
    if (maps.size === 0) continue;
    let maxCnt = Math.max(...maps.values());
    if (maxCnt < 2) continue;

    const sortedMap = [...maps.entries()]
      .filter(([cb, cnt]) => cnt === maxCnt)
      .map(([cb, cnt]) => cb);
    res = res.concat([...sortedMap]);
  }
  return res.sort();
}

function combination(order, n, maps) {
  let q = [];
  q.push(["", 0]);
  while (q.length > 0) {
    let [od, idx] = q.shift();
    if (od.length === n)
      maps.has(od) ? maps.set(od, maps.get(od) + 1) : maps.set(od, 1);
    if (od.length > n) break;
    for (let i = idx; i < order.length; i++) q.push([od + order[i], i + 1]);
  }
}
