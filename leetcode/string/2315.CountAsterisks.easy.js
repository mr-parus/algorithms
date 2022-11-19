// https://leetcode.com/problems/count-asterisks
// 2315. Count Asterisks
// #string
// #easy

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') count++;
    if (s[i] === '*' && count % 2 === 0) result++;
  }

  return result;
};
