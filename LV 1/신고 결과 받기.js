function solution(id_list, report, k) {
  // id_list의 요소 개수만큼 0으로 채운 res 배열 생성, res배열은 각 유저별로 신고 처리 결과를 받은 횟수를 저장
  let res = new Array(id_list.length);
  res.fill(0);

  // 중복된 신고 결과 제거하기 위해 set으로 생성
  let reportSet = new Set(report);

  // 각 유저별로 신고 당한 횟수를 저장하는 map
  let user = new Map();
  id_list.forEach((x) => {
    user.set(x, 0);
  });

  // 신고당한 횟수 갱신
  [...reportSet].forEach((x) => {
    let [a, b] = x.split(" ");
    user.set(b, user.get(b) + 1);
  });

  // check point!!
  // 해당 유저의 신고당한 횟수가 k번 이상인 경우, 이 유저를 신고한 유저에게 통보 횟수를 +1 해줌
  // 이 때, 해당 유저(신고 당한 횟수가 k번 이상인 유저)를 신고한 유저를 찾는 방법은 res배열의 index와 id_list의 index를 일치시켰으므로,
  // reportSet 을 순회하면서 신고한 유저(a)의 index 위치에 해당하는 res 요소의 값을 +1 시키면 된다.
  [...reportSet].forEach((x) => {
    let [a, b] = x.split(" ");
    if (user.get(b) >= k) res[id_list.indexOf(a)] += 1;
  });

  return res;
}

/**
 * check point 짚어보기
 * ex) id_ list = ["muzi", "frodo", "apeach", "neo"]일 때 유저의 수는 4명이므로,
 *     res = [0, 0, 0, 0]이 생성되는데 이떄, res[0]은 "muzi"유저가 신고 처리 결과를 받은 횟수가 된다.
 *     즉, id_list에서,
 *     "muzi"의 index = 0
 *     "frodo"의 index = 1
 *     "apeach"의 index = 2
 *     "neo"의 index = 3 이 된다. (id_list에 등장하는 유저의 index를 res 배열의 index와 일치시킴)
 *     따라서, 만약 user에 저장된 key(각 유저 이름)에 대한 value 값이 k 이상인 경우, 이를 신고한 유저(b)에게 신고처리 결과메일을 전송해야 하므로
 *     해당 유저(b)를 신고한 유저(a)의 index를 찾아서 res[index] += 1을 시켜준다.
 */
