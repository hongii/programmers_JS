function solution(answers) {
  let p = ["12345", "21232425", "3311224455"];
  let ansLen = answers.length;
  for (let i = 0; i < p.length; i++) {
    if (ansLen > p[i].length) {
      let addLen = (ansLen - p[i].length) % p[i].length;
      let mulCnt = Math.ceil((ansLen - p[i].length) / p[i].length);
      p[i] += p[i].repeat(mulCnt) + p[i].slice(0, addLen);
    } else if (ansLen <= p[i].length) {
      p[i] = p[i].slice(0, ansLen);
    }
  }
  const tmp = [];
  p.forEach((patt, idx) => {
    let cnt = answers.reduce(
      (acc, s, i) => (patt[i] === String(s) ? acc + 1 : acc),
      0
    );
    tmp.push([cnt, idx + 1]);
  });

  let res = [];
  tmp.sort((a, b) => b[0] - a[0]);
  tmp.forEach(([c, i]) => {
    if (c === tmp[0][0]) res.push(i);
  });
  return res.sort((a, b) => a - b);
}

/** 다른 사람 풀이 
 * function solution(answers) {
    const res = [];
    const a1 = [1, 2, 3, 4, 5];
    const a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const a3 =  [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    const a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    const a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    let max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {res.push(1)};
    if (a2c === max) {res.push(2)};
    if (a3c === max) {res.push(3)};

    return res;
}
 * 
 */
