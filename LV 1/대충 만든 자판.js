function solution(keymap, targets) {
  let res = [];
  let map = new Map();
  for (let i = 0; i < keymap.length; i++) {
    let key = keymap[i];
    for (let j = 0; j < key.length; j++) {
      if (map.has(key[j])) {
        map.set(key[j], [Math.min(j + 1, map.get(key[j])[0]), i + 1]);
      } else {
        map.set(key[j], [j + 1, i + 1]);
      }
    }
  }
  console.log(map);

  for (let x of targets) {
    let cnt = 0;
    for (let i = 0; i < x.length; i++) {
      if (map.has(x[i])) {
        cnt += map.get(x[i])[0];
      } else {
        cnt = -1;
        break;
      }
    }
    res.push(cnt);
  }
  console.log(res);
  return res;
}
solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]);
