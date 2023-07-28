function solution(expression) {
  const ops = new Set(expression.split(/\d/).join("").split(""));
  let exp = expression.split(/(\+|\*|\-)/);
  const pm = [];
  permutation(pm, [...ops]);

  let maxRes = 0;
  pm.forEach((op) => {
    let copyExp = [...exp];
    op.split("").forEach((op) => {
      while (copyExp.length > 1 && copyExp.includes(op)) {
        let idx = copyExp.indexOf(op);
        let num = calculate(+copyExp[idx - 1], +copyExp[idx + 1], op);
        copyExp.splice(idx - 1, 3, num);
      }
    });
    maxRes = Math.max(maxRes, Math.abs(copyExp[0]));
  });
  return maxRes;
}

function permutation(pm, ops) {
  let q = [["", 0]];
  while (q.length > 0) {
    let [op, len] = q.shift();
    if (len === ops.length) {
      pm.push(op);
      continue;
    }
    for (let i = 0; i < ops.length; i++) {
      if (!op.includes(ops[i])) q.push([op + ops[i], len + 1]);
    }
  }
}

function calculate(a, b, op) {
  if (op === "*") return a * b;
  else if (op === "+") return a + b;
  else if (op === "-") return a - b;
}
