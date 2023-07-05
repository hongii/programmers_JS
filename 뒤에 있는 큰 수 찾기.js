function solution(numbers) {
  let idxStack = [];
  let res = new Array(numbers.length).fill(-1);
  numbers.forEach((num, i) => {
    while (idxStack && numbers[idxStack.at(-1)] < num) {
      let j = idxStack.pop();
      res[j] = num;
    }
    idxStack.push(i);
  });
  return res;
}
