// https://leetcode.com/problems/is-subsequence/
// 392. Is Subsequence
// #two_pointers #string #dynamic_programming
// #easy

var isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (t[tIndex] === s[sIndex]) sIndex++;
    tIndex++;
  }

  return sIndex >= s.length;
};

console.assert(isSubsequence('abc', 'ahbgdc') === true);
console.assert(isSubsequence('axc', 'ahbgdc') === false);
