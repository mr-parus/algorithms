// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
// 150. Evaluate Reverse Polish Notation
// #array #math #stack
// #medium

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const t of tokens) {
    if (!'+-*/'.includes(t)) {
      stack.push(+t);
      continue;
    }

    const [b, a] = [stack.pop(), stack.pop()];
    if (t === '+') stack.push(a + b);
    else if (t === '-') stack.push(a - b);
    else if (t === '*') stack.push(a * b);
    else if (t === '/') stack.push((a / b) | 0);
  }

  return stack.pop();
};
