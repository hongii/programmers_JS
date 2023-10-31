function solution(name, yearning, photo) {
  const nameScore = new Map();
  let i = 0;
  name.forEach((p) => {
    nameScore.set(p, yearning[i++]);
  });

  const res = [];
  photo.forEach((scores) => {
    res.push(
      scores.reduce(
        (acc, p) => (nameScore.has(p) ? acc + nameScore.get(p) : acc),
        0
      )
    );
  });
  return res;
}
