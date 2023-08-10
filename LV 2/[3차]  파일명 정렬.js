function solution(files) {
  let res = [];
  files.forEach((f, idx) => {
    let tmp = f.toLowerCase().split(/(\d+)/);
    let head = tmp[0];
    let number = tmp[1];
    res.push([head, +number, idx, f]);
  });
  res.sort((a, b) => a[0].localeCompare(b[0]) || a[1] - b[1] || a[2] - b[2]);
  return res.map((a) => a[3]);
}
