function solution(want, number, discount) {
  let res = 0;
  let list = new Map();
  want.forEach((name, i) => {
    list.set(name, number[i]);
  });

  for (let i = 0; i <= discount.length - 10; i++) {
    let tmp = discount.slice(i, i + 10);
    res = counter(tmp, list) ? res + 1 : res;
  }
  return res;
}

function counter(arr, list) {
  let tmpMap = new Map();
  arr.forEach((name) => {
    if (tmpMap.has(name)) tmpMap.set(name, tmpMap.get(name) + 1);
    else tmpMap.set(name, 1);
  });

  let check = true;
  list.forEach((val, key) => {
    if (tmpMap.get(key) !== val || !tmpMap.has(key)) check = false;
  });
  return check;
}
