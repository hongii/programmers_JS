function solution(s) {
  const numWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < numWords.length; i++) {
    s = s.replaceAll(numWords[i], i);
  }
  return +s;
}
