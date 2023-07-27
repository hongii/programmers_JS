function solution(n) {
  let arr = Array(n)
    .fill(0)
    .map((_, i) => Array(i + 1).fill(0));
  let size = n;
  let num = 1;
  let x = 0,
    y = 0;
  while (size > 0) {
    for (let i = 0; i < size; i++) {
      // 가로 방향
      arr[x++][y] = num++;
    }
    x -= 1;
    y += 1;
    size -= 1;

    for (let i = 0; i < size; i++) {
      // 세로 방향
      arr[x][y++] = num++;
    }
    x -= 1;
    y -= 2;
    size -= 1;

    for (let i = 0; i < size; i++) {
      // 대각선 왼쪽 위쪽 방향
      arr[x--][y--] = num++;
    }
    x += 2;
    y += 1;
    size -= 1;
  }
  console.log(
    Array(n)
      .fill(0)
      .map((_, i) => Array(i + 1).fill(0))
  );
  return arr.flat();
}

/**
nxn 2차원 배열에서 원소의 절반만 사용하기 위한 직각 삼각형 배열 만들기(?)
1) 반복문 사용
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(new Array(i).fill(0));

2) Array().fill()과 map메서드 이용
  let arr = Array(n).fill(0).map((_, i) => Array(i + 1).fill(0))

=> 1)과 2)에서 arr출력 결과
	[
    [ 0 ],
    [ 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ]
  ]

*/
