function solution(book_time) {
  book_time = book_time.map(([start, end]) => {
    let startH = +start.slice(0, 2) * 60;
    let startM = +start.slice(3, 5);
    let endH = +end.slice(0, 2) * 60;
    let endM = +end.slice(3, 5);
    return [startH + startM, endH + endM];
  });

  book_time.sort((a, b) => a[0] - b[0]);
  const checkout = [book_time[0][1]];
  let cnt = 1;
  for (let i = 1; i < book_time.length; i++) {
    checkout.sort((a, b) => a - b);
    // console.log(checkout,book_time[i], cnt )
    if (checkout[0] + 10 > book_time[i][0]) {
      checkout.push(book_time[i][1]);
      cnt = Math.max(cnt, checkout.length);
    } else {
      while (checkout[0] + 10 <= book_time[i][0]) {
        checkout.shift();
      }
      checkout.push(book_time[i][1]);
    }
  }
  return cnt;
}
