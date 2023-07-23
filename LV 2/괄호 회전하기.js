function solution(s) {
  let cnt = 0;
  let res = 0;
  let cmpStr = s.repeat(2);
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  while (cnt < s.length) {
    let stack = [];
    let check = true;
    let str = cmpStr.slice(cnt, cnt + s.length);
    for (let i = 0; i < str.length; i++) {
      if (stack.length === 0 && ["}", "]", ")"].includes(str[i])) {
        check = false;
        break;
      } else if (["{", "[", "("].includes(str[i])) stack.push(str[i]);
      else if (["}", "]", ")"].includes(str[i])) {
        if (pair[stack.at(-1)] === str[i]) stack.pop();
      }
    }
    if (check && !stack.length) res++;
    cnt++;
  }
  return res;
}
