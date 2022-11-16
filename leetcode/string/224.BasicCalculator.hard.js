var calculate = function (s) {
  const stack = [];
  let num = 0;
  let i = 0;
  let sign = '+';

  const update = (op, v) => {
    if (op === '+') return stack.push(v);
    if (op === '-') return stack.push(-v);
    if (op === '*') return stack.push(stack.pop() * v);
    if (op === '/') return stack.push(stack.pop() / v);
  };

  while (i <= s.length) {
    if ('+-/*'.includes(s[i])) {
      update(sign, num);
      [num, sign] = [0, s[i]];
    } else if (/\d/g.test(s[i])) {
      num = num * 10 + parseInt(s[i]);
    } else if (s[i] === '(') {
      let opened = 1;
      let k = i + 1;

      while (k < s.length && opened > 0) {
        if (s[k] === '(') opened++;
        if (s[k] === ')') opened--;
        if (opened === 0) break;
        k++;
      }

      num = calculate(s.substring(i + 1, k));
      i = k;
    }

    i++;
  }
  update(sign, num);

  return stack.reduce((a, b) => a + b, 0);
};

console.log(calculate('(2 + 2) * (2)'));
