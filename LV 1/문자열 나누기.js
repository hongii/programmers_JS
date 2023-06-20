function solution(s) {
  let sameCnt = 0, difCnt = 0, res = 0;
  let cmp = s[0];
  for (let i=0; i<s.length; i++){
    if (s[i] == cmp) sameCnt += 1;
    else if (s[i] != cmp) difCnt += 1;
      
    if (sameCnt == difCnt) {
      sameCnt = 0, difCnt = 0;
      res += 1;
      cmp = s[i+1];
    }
  }
  if (sameCnt != 0 || difCnt != 0) res += 1;
  
  return res
}