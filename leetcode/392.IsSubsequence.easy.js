// https://leetcode.com/problems/is-subsequence/

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
