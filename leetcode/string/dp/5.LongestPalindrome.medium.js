// https://leetcode.com/problems/longest-palindromic-substring/description/
// 5. Longest Palindromic Substring
// #string #dynamic_programming
// #medium

function longestPalindrome(s) {
  const N = s.length;
  const M = new Array(N).fill(0).map(_ => []);
  let longest = '';

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N - j; i++) {
      if (j === 0) {
        M[i][i + j] = true;
      } else if (j === 1) {
        M[i][i + j] = s[i] === s[i + j];
      } else {
        M[i][i + j] = s[i] === s[i + j] && M[i + 1][i + j - 1];
      }

      if (M[i][i + j] && j > longest.length - 1) {
        longest = s.substring(i, i + j + 1);
      }
    }
  }

  return longest;
}

console.log(longestPalindrome('cbbd'));
