function solution(weights) {
  const map = new Map();
  weights.forEach((w) => {
    if (!map.has(w)) map.set(w, 1);
    else map.set(w, map.get(w) + 1);
  });

  // 경우의 수 : (1,1) (1,2) (2,1) (2,3) (3,2) (3,4) (4,3)
  let res = 0;
  weights.forEach((w) => {
    // console.log(w, w/2, 2*w,(2*w)/3 ,(3*w)/2,(3*w)/4, (4*w)/3)
    if (map.has(w) && map.get(w) >= 2) res += map.get(w) - 1;
    if (map.has(w / 2)) res += map.get(w / 2);
    if (map.has(2 * w)) res += map.get(2 * w);
    if (map.has((2 * w) / 3)) res += map.get((2 * w) / 3);
    if (map.has((3 * w) / 2)) res += map.get((3 * w) / 2);
    if (map.has((3 * w) / 4)) res += map.get((3 * w) / 4);
    if (map.has((4 * w) / 3)) res += map.get((4 * w) / 3);
  });
  return res / 2;
}
