// 두번째 코드
function solution(X, Y) {
  let listX = [...X],
    listY = [...Y];
  let setX = new Set(listX),
    setY = new Set(listY);
  let intersection = [...setX].filter((el) => [...setY].includes(el));

  if (intersection.length == 0) return "-1";
  else if (intersection.length === 1 && intersection[0] === "0") return "0";
  else {
    let res = [...intersection];
    intersection.forEach((num) => {
      let cntX = 0,
        cntY = 0;
      listX.forEach((a) => {
        if (a === num) cntX += 1;
      });
      listY.forEach((a) => {
        if (a === num) cntY += 1;
      });
      let min = Math.min(cntX, cntY) - 1;
      while (min--) res.push(num);
    });
    res.sort((a, b) => +b - +a);
    return res.join("");
  }
}

/** 첫번째 코드 -> 통과
 * function solution(X, Y) {
  // 문자열 X, Y를 배열로 바꾼 후, map을 통해 배열의 각 string형 숫자 요소를 숫자형으로 변
  X = [...X].map((x) => +x);
  Y = [...Y].map((y) => +y);
  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  const mapX = new Map();
  X.forEach((num) => {
    if (!mapX.has(num)) mapX.set(num, 1);
    else mapX.set(num, mapX.get(num) + 1);
  });
  const mapY = new Map();
  Y.forEach((num) => {
    if (!mapY.has(num)) mapY.set(num, 1);
    else mapY.set(num, mapY.get(num) + 1);
  });

  let intersection = [...mapX.keys()].filter((num) => {
    return [...mapY.keys()].includes(num);
  });

  let res = [];
  console.log(intersection);
  if (intersection.length === 0) return "-1";
  else {
    intersection.forEach((key) => {
      let len = Math.min(mapX.get(key), mapY.get(key));
      while (len) {
        res.push(key);
        len -= 1;
      }
    });
    if (res.every((num) => num === 0)) return "0";
    else {
      res.sort((a, b) => b - a);
      return res.map((num) => String(num)).join("");
    }
  }
}
 */
