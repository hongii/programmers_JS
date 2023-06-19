function solution(t, p) {
  let cnt = 0;
  let i = 0;      
  while (i <= t.length - p.length){
      let num = t.slice(i, i+p.length);
      if (+num <= +p) cnt += 1;
      i += 1
  }
  return cnt
}

/**
 * 문자형 숫자를 정수형으로 바꾸는 방법 
 * => parseInt(), Number()메서드를 사용하거나 "+" 단항 연산자 기호를 문자형 숫자 앞에 쓰면 숫자형으로 바꿔준다.
 */