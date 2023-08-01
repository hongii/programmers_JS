function solution(name) {
  let cntLR = name.length - 1; // 좌우 이동 횟수, 초기값은 좌우 이동의 최댓값으로 넣음
  let cntUD = 0; // 상하 이동 횟수
  for (let i = 0; i < name.length; i++) {
    // 상하 이동 횟수 추가
    cntUD += Math.min(
      name[i].charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() - name[i].charCodeAt() + 1
    );

    // 최소 좌우 이동 횟수 갱신
    let endIdxA = i + 1;
    while (endIdxA < name.length && name[endIdxA] === "A") endIdxA++; // 현재 위치 이후에 등장하는 연속된 A문자열의 끝idx 찾기
    // 기존의 좌우 이동 최소횟수, 연속된 A의 왼->오 방향의 최소횟수, 연속된 A의 오->왼 방향의 최소횟수 중 최솟값으로 갱신
    cntLR = Math.min(
      cntLR,
      2 * i + name.length - endIdxA,
      2 * (name.length - endIdxA) + i
    );
  }
  return cntUD + cntLR;
}
