function solution(arr) {
  let zeroCnt = 0,
    oneCnt = 0;
  const checkAll = (x, y, size, arr) => {
    let allZero = false,
      allOne = false;
    for (let i = x; i < x + size; i++) {
      let tmp = arr[i].slice(y, y + size);
      if (tmp.every((num) => num === 0) && !allOne) allZero = true;
      else if (tmp.every((num) => num === 1) && !allZero) allOne = true;
      else return false;
    }

    if (allZero) zeroCnt++;
    else if (allOne) oneCnt++;
    return true;
  };

  const divideConquer = (x, y, size, arr) => {
    if (size > 1 && checkAll(x, y, size, arr)) return;
    if (size === 1) {
      if (arr[x][y] === 0) zeroCnt++;
      else oneCnt++;
    } else {
      size /= 2;
      divideConquer(x, y, size, arr);
      divideConquer(x, y + size, size, arr);
      divideConquer(x + size, y, size, arr);
      divideConquer(x + size, y + size, size, arr);
    }
  };

  divideConquer(0, 0, arr.length, arr);
  return [zeroCnt, oneCnt];
}
