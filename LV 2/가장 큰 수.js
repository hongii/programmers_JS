function solution(numbers) {
  let res = numbers
    .map((a) => String(a))
    .sort((a, b) =>
      b.repeat(4).slice(0, 4).localeCompare(a.repeat(4).slice(0, 4))
    )
    .join("");
  return Number(res) !== 0 ? res : "0";
}
