function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    if (a[col - 1] !== b[col - 1]) return a[col - 1] - b[col - 1];
    else if (a[col - 1] === b[col - 1]) return b[0] - a[0];
  });
  // console.log(data);

  let res = 0;
  for (let i = row_begin - 1; i < row_end; i++) {
    let Sn = data[i].reduce((acc, num) => acc + (num % (i + 1)), 0);
    res = res ^ Sn;
  }

  return res;
}
