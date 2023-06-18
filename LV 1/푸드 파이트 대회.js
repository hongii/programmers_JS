function solution(food) {
  let res = ""
  for (let i=1; i<food.length; i++){
      let cnt = parseInt(food[i]/2)
      res += String(i).repeat(cnt)
  }
  resReverse = res.split("").reverse().join("") // 문자열 뒤집기 : 문자열을 배열로 만들어서(split()) 뒤집고(reverse()) 다시 문자열로 합침(join())
  res += "0" + resReverse
  return res
}