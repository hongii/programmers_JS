function solution(survey, choices) {
  let type = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  let testResult = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    let [a, b] = survey[i].split("");
    // 선택 유형이 비동의 구간 점수인 경우
    if ([1, 2, 3].includes(choices[i])) testResult[a] += 4 - choices[i];
    // 선택 유형이 동의 구간 점수인 경우
    else if ([5, 6, 7].includes(choices[i])) testResult[b] += choices[i] - 4;
  }

  let res = "";
  type.forEach((t) => {
    // t[0]의 점수가 t[1]과 같거나 큰 경우 -> t[0] 유형이 선택
    // (같은 경우를 해당 조건문에 같이 넣은 이유는 type의 리스트 쌍에 이미 사전순으로 정렬해서 넣어놨으므로)
    if (testResult[t[0]] >= testResult[t[1]]) res += t[0];
    // t[0]의 점수가 t[1]보다 작은 경우 -> t[1] 유형이 선택
    else if (testResult[t[0]] < testResult[t[1]]) res += t[1];
  });
  return res;
}

/** 다른 사람 풀이 
 * function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];
        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4); //check Point
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join(""); //check Point
 */
