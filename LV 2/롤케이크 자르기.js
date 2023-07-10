function solution(topping) {
  let counter = new Map();
  topping.forEach((t) => {
    if (counter.has(t)) counter.set(t, counter.get(t) + 1);
    else counter.set(t, 1);
  });

  let set = new Set();
  let res = 0;
  for (let i = 0; i < topping.length; i++) {
    let t = topping[i];
    counter.set(t, counter.get(t) - 1);
    if (counter.get(t) === 0) counter.delete(t);

    set.add(topping[i]);
    if (set.size === counter.size) res++;
  }
  return res;
}
