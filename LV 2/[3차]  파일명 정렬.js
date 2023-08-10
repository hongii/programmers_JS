function solution(files) {
  let res = [];
  files.forEach((f, idx) => {
    let tmp = f.toLowerCase().split(/(\d+)/);
    let head = tmp[0];
    let number = tmp[1];
    res.push([head, +number, idx, f]);
  });
  res.sort((a, b) => a[0].localeCompare(b[0]) || a[1] - b[1] || a[2] - b[2]);
  return res.map((a) => a[3]);
}

/* sort 메서드에서 비교 기준이 여러개인 경우
 * || (OR 연산자)를 사용해서 앞의 비교값이 같은 경우에는 다음 조건문을 수행할 수 있도록 하면 된다.
 * || 연산자는 첫번째 truthy한 값을 찾아 반환하므로 앞의 비교에서 0이 나온 경우엔 다음 조건문을 수행하는 것이다.
 * 즉, sort 메서드에서 a-b의 값이 양수이거나 음수가 아닌 0( a === b인 경우)이 나왔다면, 다음 조건문으로 넘어가서 한번 더 비교를 수행한다.
 */
