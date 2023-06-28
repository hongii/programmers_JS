function solution(numbers, hand) {
  let res = "";
  let l = [3, 0],
    r = [3, 2];
  const phone = new Map([
    [1, [0, 0]],
    [2, [0, 1]],
    [3, [0, 2]],
    [4, [1, 0]],
    [5, [1, 1]],
    [6, [1, 2]],
    [7, [2, 0]],
    [8, [2, 1]],
    [9, [2, 2]],
    [0, [3, 1]],
  ]);

  numbers.forEach((num, i) => {
    let [x, y] = phone.get(num);
    if ([1, 4, 7].includes(num)) {
      l = [x, y];
      res += "L";
    } else if ([3, 6, 9].includes(num)) {
      r = [x, y];
      res += "R";
    } else {
      let leftDis = Math.abs(l[0] - x) + Math.abs(l[1] - y);
      let rightDis = Math.abs(r[0] - x) + Math.abs(r[1] - y);
      if (leftDis > rightDis || (leftDis === rightDis && hand === "right")) {
        r = [x, y];
        res += "R";
      } else if (
        leftDis < rightDis ||
        (leftDis === rightDis && hand === "left")
      ) {
        l = [x, y];
        res += "L";
      }
    }
  });
  return res;
}
