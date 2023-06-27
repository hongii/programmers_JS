function solution(new_id) {
  let res = "";
  const alpha = [];
  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    alpha.push(String.fromCharCode(i));
  }
  // 1단계
  new_id = new_id.toLowerCase();

  // 2단계
  new_id = [...new_id]
    .map((s) => {
      if (!isNaN(s) || alpha.includes(s) || [".", "_", "-"].includes(s))
        return s;
    })
    .join("");

  // 3단계
  while (new_id.includes("..")) new_id = new_id.replaceAll("..", ".");

  // 4단계
  new_id = new_id[0] == "." ? new_id.slice(1) : new_id;
  new_id = new_id.at(-1) == "." ? new_id.slice(0, -1) : new_id;

  // 5단계
  new_id = new_id === "" ? "a" : new_id;

  // 6단계
  new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id;
  if (new_id.at(-1) === ".") new_id = new_id.slice(0, -1);

  // 7단계
  new_id =
    new_id.length <= 2
      ? new_id + new_id.at(-1).repeat(3 - new_id.length)
      : new_id;

  return new_id;
}

/**
 * 다른 사람 풀이 -> 정규식 이용
function solution(new_id) {
  const answer = new_id
      .toLowerCase() // 1
      .replace(/[^\w-_.]/g, '') // 2
      .replace(/\.+/g, '.') // 3
      .replace(/^\.|\.$/g, '') // 4
      .replace(/^$/, 'a') // 5
      .slice(0, 15).replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
 */
