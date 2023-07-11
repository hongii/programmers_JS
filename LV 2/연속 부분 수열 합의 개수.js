function solution(elements) {
  let numSet = new Set();
  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let num;
      if (j + i >= elements.length) {
        let nums = elements
          .slice(j, elements.length)
          .concat(elements.slice(0, (j + i) % elements.length));
        num = nums.reduce((acc, n) => acc + n);
      } else {
        num = elements.slice(j, j + i).reduce((acc, n) => acc + n);
      }
      numSet.add(num);
    }
  }
  // console.log(numSet)
  return numSet.size;
}
