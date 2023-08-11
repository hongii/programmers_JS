function solution(msg) {
  const alphaDic = new Map();
  let val = "A".charCodeAt();
  for (let i = 1; i <= 26; i++) {
    alphaDic.set(String.fromCharCode(val++), i);
  }
  const res = [];
  let nextVal = 27;
  while (msg.length > 0) {
    let i = 0;
    while (i < msg.length && alphaDic.has(msg.slice(0, i + 1))) i++;

    if (!alphaDic.has(msg.slice(0, i + 1)))
      alphaDic.set(msg.slice(0, i + 1), nextVal);
    res.push(alphaDic.get(msg.slice(0, i)));
    nextVal++;
    msg = msg.slice(i);
  }
  return res;
}
