function solution(s, skip, index) {
  const customDic = [] 
  for (let i=0; i<26; i++){
      customDic.push(String.fromCodePoint('a'.charCodeAt()+i))
  }

  for (let i=0;i<skip.length;i++) {
      let idx = customDic.indexOf(skip[i])
      customDic.splice(idx, 1)
  }

  let res = ""
  const l = customDic.length
  for (let i=0;i<s.length;i++) {
      let idx = customDic.indexOf(s[i])
      res += customDic[(idx+index)%l]
  }
  return res
}