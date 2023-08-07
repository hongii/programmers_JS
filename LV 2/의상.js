function solution(clothes) {
  const clothesMap = new Map();
  clothes.forEach((cloth) => {
    if (clothesMap.has(cloth[1]))
      clothesMap.set(cloth[1], clothesMap.get(cloth[1]) + 1);
    else clothesMap.set(cloth[1], 1);
  });

  let res = 1;
  clothesMap.forEach((val, key) => {
    res *= val + 1;
  });
  return res - 1;
}
