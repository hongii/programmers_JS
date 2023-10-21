function solution(numbers) {
  numbers = numbers.split("");
  let res = new Set();
  let check;
  const isPrime = (num) => {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const permutation = (numbers, numStr, len) => {
    if (isPrime(+numStr)) res.add(+numStr);
    for (let i = 0; i < numbers.length; i++) {
      if (!check[i]) {
        check[i] = true;
        permutation(numbers, numStr + String(numbers[i]), len);
        check[i] = false;
      }
    }
  };

  check = new Array(numbers.length).fill(false);
  permutation(numbers, "", 0);
  return res.size;
}
