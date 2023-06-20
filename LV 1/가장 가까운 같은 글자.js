function solution(s) {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    let idx = s.slice(0, i).lastIndexOf(s[i]);
    if (idx == -1) res.push(-1);
    else res.push(i - idx);
  }
  return res;
}

/**
 * function solution(s) {
  return [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
}
=> map() 메서드를 이용한 풀이. 
문자열 s를 전개연산자를 이용하여 [...s]를 하면 문자열 한 글자씩 요소로 들어가는 배열이 된다.
이 배열에서 map메서드를 이용하여 작업을 수행
 */
