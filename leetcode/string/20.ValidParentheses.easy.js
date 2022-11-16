// https://leetcode.com/problems/valid-parentheses/description/
// 20. Valid Parentheses
// #string #stack
// #easy

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const parentheses = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const ch of s) {
    if (Object.keys(parentheses).includes(ch)) {
      stack.push(ch);
      continue;
    }

    if (Object.values(parentheses).includes(ch)) {
      if (ch !== parentheses[stack.pop()]) {
        return false;
      }
    }
  }

  return !stack.length;
};
