function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].slice(0, phone_book[i].length) === phone_book[i])
      return false;
  }
  return true;
}
// slice메서드에서 슬라이싱 하고자 하는 문자열 길이보다 기존 문자열 길이가 더 짧으면 기존문자열 전체를 반환
// ex) "asd".slice(0, 6) -> 전체 문자열 "asd"를 반환
