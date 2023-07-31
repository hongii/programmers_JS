function solution(people, limit) {
  let l = 0,
    r = people.length - 1;
  let res = 0;
  people.sort((a, b) => b - a);
  while (l <= r) {
    if (people[l] + people[r] > limit) l += 1;
    else {
      l += 1;
      r -= 1;
    }
    res += 1;
  }
  return res;
}
