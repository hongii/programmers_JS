function solution(skill, skill_trees) {
  let res = 0;
  skill_trees.forEach((skillTree) => {
    let tmp = "";
    [...skillTree].forEach((s) => {
      if (skill.includes(s)) tmp += s;
    });
    if (skill.slice(0, tmp.length) === tmp) res += 1;
  });
  return res;
}
