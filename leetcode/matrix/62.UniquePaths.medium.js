// https://leetcode.com/problems/unique-paths/description/
// 62. Unique Paths
// #math #dynamic_programming #combinatorics
// #medium

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const memo = Array.from({ length: m }).map(_ => new Array(n).fill(0));
  return count(m - 1, n - 1, memo);
};

function count(m, n, memo) {
  if (m < 0 || n < 0) return 0;
  if (m === 0 && n === 0) return 1;

  if (!memo[m][n]) {
    memo[m][n] = count(m - 1, n, memo) + count(m, n - 1, memo);
  }

  return memo[m][n];
}

uniquePaths(3, 5);
//  0  1  1   1   1
//  1  2  3   4   5
//  1  3  6  10  15

// Solution 2 with simple traversal
// https://github.com/vitkarpov/coding-interviews-blog-archive/blob/main/posts/unique-paths.md
