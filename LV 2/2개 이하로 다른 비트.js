// 첫번째 풀이 -> 조건문으로 나눠 품
function solution(numbers) {
  const res = [];
  numbers.forEach((num) => {
    let toBin = num.toString(2);
    if ([...toBin].every((n) => n === "1")) {
      // 이진수의 모든 숫자가 1인 경우 ex) 111, 1111 등 -> 이진수 맨 앞에 0을 추가하고 마지막 숫자(1)를 맨 앞으로 이동시킨 값
      toBin = toBin.padStart(toBin.length + 1, "0");
      let lastBit = toBin.at(-1);
      let otherBits = lastBit + toBin.slice(0, -1);
      res.push(parseInt(otherBits, 2));
    } else if (toBin.slice(-2) !== "11") {
      // 이진수의 마지막 두자리가 11로 끝나지 않은 경우, 즉 00, 01, 10으로 끝나는 경우 -> 그냥 기존 값에 1만 더해주면 됨
      res.push(parseInt((num + 1).toString(2), 2));
    } else {
      // 이진수 모든  숫자가 1이 아니면서, 11로 끝나는 경우의 수 ex) 100011,  10111 등 -> 마지막 자리부터 거꾸로 1의 갯수를 카운트하고 처음으로 등장하는 0의 인덱스부터 마지막 자리까지 slice. 이후 맨 마지막 숫자를 zeroIdx위치로 shift
      let cntOne = 0;
      let zeroIdx = 0;
      for (let i = toBin.length - 1; i >= 0; i--) {
        if (toBin[i] === "1") cntOne += 1;
        else {
          zeroIdx = i;
          break;
        }
      }
      let tmp = toBin.slice(zeroIdx, toBin.length);
      tmp = tmp.at(-1) + tmp.slice(0, tmp.length - 1);
      toBin = toBin.slice(0, zeroIdx) + tmp;
      res.push(parseInt(toBin, 2));
    }
  });
  return res;
}

// 두번째 풀이 -> 파이썬으로 풀었던 풀이. 연속된 1의 갯수를 카운트하고 이를 이용하여 숫자를 더하는 방식
function solution(numbers) {
  const res = [];
  numbers.forEach((num) => {
    let toBin = num.toString(2);
    let cnt =
      toBin.lastIndexOf("0") !== -1
        ? toBin.length - toBin.lastIndexOf("0") - 1
        : toBin.length;
    cnt = cnt === 0 ? 1 : cnt;
    res.push(num + 2 ** (cnt - 1));
  });
  return res;
}
