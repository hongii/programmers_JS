// 두번째 코드 -> 통과
function solution(k, m, score) {
  score.sort((a, b) => b-a)
  let price = 0
  for (let i=m-1; i<score.length; i+=m){
      price += score[i] * m
  }
  return price
}

/* 두번째 코드 풀이 -> 배열의 인덱스로 최솟값을 뽑아서 계산
내림차순으로 정렬된 배열 score에서 m개씩 나누어 반복하고, 이 때 m번째에 위치한 값이 최솟값이다.
ex) 내림차순 정렬된 score = [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1]이고  m=3 인 경우
for (let i=m-1; i<score.length; i+=m){ 
      price += score[i] * m
  }
위의 반복문을 수행할 때 마다, m개씩 나누어 확인하는데 이 때 i는 m번째의 index(=m-1)가 들어간다.
즉, 반복문 돌때마다 m개씩 나누어진 배열로 [(4, 4, 4), (4, 4, 4), (2, 2, 2), (2, 1)] 이런식으로 3개씩 나누어 확인하게 된다. 
여기서 3개로 나뉘어진 배열을 하나의 상자로 봤을때, 총 3개의 상자가 만들어졌다.

1번째 반복문에서 i = m-1 -> i = 2가 되고, score배열은 이미 내림 차순으로 정렬된 상태이므로 3개로 나눈 (4, 4, 4)에서 가장 마지막 값이 최솟값이 된다.
따라서, score[2] * m 이 이익이 된다. (문제에서 이익은 한 상자에 담긴 값의 최솟값 * m이 된다고 정의함)
2번째 반복문에서 i = 5가 되고, 전체 배열 score[5] = 4가 두번째 상자 (4, 4, 4)에서의 최솟값이 된다.
3번째 반복문에서 i = 8이 되고, 전체 배열 score[8] = 2가 세번째 상자 (2, 2, 2)에서의 최솟값이 된다.
4번째 반복문에서 i = 11가 되는데 이 때 i의 범위가 i<score.length에 의해 만족하지 않으므로 반복문을 종료하게 된다. (m개 미만이 담긴 상자는 pass)

따라서, price = score[2] * 3 + score[5] * 3 + score[8] * 3 이 된다. 
*/



/* 첫번째 코드 -> 예제는 통과, 제출시 시간초과 발생. 
function solution(k, m, score) {
  score.sort((a, b) => b-a)
  let price = 0
  while (score.length >= m){
      let box = score.splice(0, m)
      price += box[m-1] * m
  }
  return price
}
*/