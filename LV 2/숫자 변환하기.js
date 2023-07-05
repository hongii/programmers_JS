function solution(x, y, n) {
  const bfs = (x, y, n) => {
    const q = [];
    let check = new Array(y + 1).fill(Infinity);
    check[x] = 0;
    q.push(x);
    let i = 0; //배열의 맨 앞 요소에 idx로 접근하는 방식으로 변경 -> O(1)시간, i=0일때 0번째, i=1일때 1번째 요소가 각 반복문 수행할 때 마다 deque에서의 맨 앞 요소가 되는 것 처럼 생각.
    // 원래는 q에서 맨 앞 요소를 pop해주어야 하지만 시간초과 문제로 그냥 인덱스로 다음 요소로 접근하는 방식으로 맨 앞 요소에 접근
    // while문에서 반복문 수행할 때 마다 무조건 popleft()이 한번씩 수행되므로 이와 비슷한 동작을 하도록 idx를 하나씩 증가시키는 i++; 을 수행
    while (i < check.length) {
      let num = q[i]; // 반복문 수행할 때 마다 q의 맨 앞 요소를 비교하는 것과 같은 방식, O(1)
      i++; // 다음 반복문에서는 i+1번째 요소가 첫번째 요소가 된다.
      if (num == y) return check[y];

      if (num * 3 <= y && check[num * 3] > check[num] + 1) {
        check[num * 3] = check[num] + 1;
        q.push(num * 3);
      }
      if (num * 2 <= y && check[num * 2] > check[num] + 1) {
        check[num * 2] = check[num] + 1;
        q.push(num * 2);
      }
      if (num + n <= y && check[num + n] > check[num] + 1) {
        check[num + n] = check[num] + 1;
        q.push(num + n);
      }
    }
    return -1;
  };
  let res = bfs(x, y, n);
  return res;
}

/**첫번째 코드 -> bfs 사용했으나 테케 2개에서 시간초과.
 * js에는 파이썬과 달리 deque가 없으므로 popleft()같은 메서드가 없다. 
 * 따라서, 배열의 맨 앞 요소를 제거하려면 shift()메서드를 사용해야 하는데 이는 O(n)시간이 걸리므로 시간초과가 날 수 있다. 
 * function solution(x, y, n) {
    const bfs = (x, y, n) => {
        const q = [];
        let check = new Array(y+1).fill(Infinity);
        check[x] = 0;
        q.push(x);
        while (q.length > 0) {
            let num = q.shift(); //여기서 시간초과, O(n)
            if (num == y) return check[y];

            if (num*3 <= y && check[num*3] > check[num]+1) {
                check[num*3] = check[num]+1
                q.push(num*3);
            }
            if (num*2 <= y && check[num*2] > check[num]+1) {
                check[num*2] = check[num]+1
                q.push(num*2);
            }
            if (num+n <= y && check[num+n] > check[num]+1) {
                check[num+n] = check[num]+1
                q.push(num+n);
            }
        }
        return -1;
    }
    let res = bfs(x, y, n);
    return res;
}

 * 
 */
