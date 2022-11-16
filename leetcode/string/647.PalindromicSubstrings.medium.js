// https://leetcode.com/problems/palindromic-substrings/
// 647. Palindromic Substrings
// #string #dynamic_programming
// #medium

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const N = s.length;
  const M = new Array(N).fill(0).map(_ => []);
  let count = 0;

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N - j; i++) {
      if (j === 0) {
        M[i][i + j] = true;
      } else if (j === 1) {
        M[i][i + j] = s[i] === s[i + j];
      } else {
        M[i][i + j] = s[i] === s[i + j] && M[i + 1][i + j - 1];
      }

      if (M[i][i + j]) {
        count++;
      }
    }
  }

  return count;
};

console.log(countSubstrings('etstsaa'));
