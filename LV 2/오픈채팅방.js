function solution(record) {
  const recordMap = new Map();
  record.forEach((r) => {
    let tmp = r.split(" ");
    if (tmp[0] === "Enter" || tmp[0] === "Change")
      recordMap.set(tmp[1], tmp[2]);
  });

  const res = [];
  record.forEach((r) => {
    let tmp = r.split(" ");
    if (tmp[0] === "Enter")
      res.push(recordMap.get(tmp[1]) + "님이 들어왔습니다.");
    else if (tmp[0] === "Leave")
      res.push(recordMap.get(tmp[1]) + "님이 나갔습니다.");
  });
  return res;
}
