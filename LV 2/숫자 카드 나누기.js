function solution(arrayA, arrayB) {
  let res = 0;
  const GCD = (a, b) => {
    if (a < b) [a, b] = [b, a];

    while (b != 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  let gcdA = arrayA[0],
    gcdB = arrayB[0];
  for (let i = 1; i < arrayA.length; i++) {
    gcdA = GCD(gcdA, arrayA[i]);
  }
  for (let i = 1; i < arrayB.length; i++) {
    gcdB = GCD(gcdB, arrayB[i]);
  }
  console.log(gcdA, gcdB);

  if (gcdA !== 1) {
    if (arrayB.every((num) => num % gcdA !== 0)) res = gcdA;
  }
  if (gcdB !== 1) {
    if (arrayA.every((num) => num % gcdB !== 0)) res = Math.max(res, gcdB);
  }
  return res;
}
