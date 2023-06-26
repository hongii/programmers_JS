function solution(absolutes, signs) {
  let res = 0;
  absolutes.forEach((num, i) => {
    signs[i] ? (res += num) : (res -= num);
  });
  return res;
}
