// https://leetcode.com/problems/minimum-path-sum/description/
// 64. Minimum Path Sum
// #array #dynamic_programming #matrix
// #medium

/**
 * @param {number[][]} A
 * @return {number}
 */
var minPathSum = function (A) {
  const M = A.length;
  const N = A[0].length;
  const dp = Array.from(Array(M)).map(_ => []);
  const { MAX_VALUE } = Math;

  function solve(m, n) {
    if (m < 0 || n < 0) return MAX_VALUE;

    if (!dp[m][n]) {
      const min = Math.min(solve(m, n - 1), solve(m - 1, n));
      dp[m][n] = A[m][n] + (min === MAX_VALUE ? 0 : min);
    }

    return dp[m][n];
  }

  return solve(M - 1, N - 1);
};
