function solution(s, skip, index) {
  const customDic = [];
  for (let i = 0; i < 26; i++) {
    customDic.push(String.fromCodePoint("a".charCodeAt() + i));
  }

  for (let i = 0; i < skip.length; i++) {
    let idx = customDic.indexOf(skip[i]);
    customDic.splice(idx, 1);
  }

  let res = "";
  const l = customDic.length;
  for (let i = 0; i < s.length; i++) {
    let idx = customDic.indexOf(s[i]);
    res += customDic[(idx + index) % l];
  }
  return res;
}

/* 다른 사람의 풀이 참고
function solution(s, skip, index) {
  let customDic = [];
  for (let i=0; i<26; i++){
      customDic.push(String.fromCodePoint('a'.charCodeAt()+i));
  }

  // filter 메서드를 통해 skip에 포함되지 않는 알파벳들을 골라서 customDic을 재구성한다.
  // 즉, 기존 'a'~'z'까지 전부 존재하는 customDic에서 skip에 포함되는 알파벳은 제거하고 나머지 알파벳들로만 구성된 custonDic을 만들 수 있다. 
  customDic = customDic.filter(c => !skip.includes(c));

  // s.split("")를 통해 문자열 s를 배열로 변경하고(s = "asdf"라면, s.split("")의 결과값은 ['a', 's', 'd', 'f']가 된다.) 이 배열의 요소를 하나씩 가져와서 customDic에서 해당 알파벳의 idx를 찾고,
  // 문제에서 주어진 index 값 만큼 뒤에 존재하는 알파벳을 가져온다. map메서드는 ['a', 's', 'd', 'f']배열 각각의 원소에 전부 이 로직을 적용한 후 새로운 배열을 반환한다.
  // 반환된 배열(res)을 다시 문자열로 합친다. (res.join(""))
  let res =  s.split("").map(c => customDic[(customDic.indexOf(c) + index) % customDic.length]);
  return res.join("");
}
*/
