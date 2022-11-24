// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
// 329. Longest Increasing Path in a Matrix
// #array #dynamic_programming #depth-first_search #breadth-first_search #graph #topological_sort #memoization #matrix
// #hard

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const M = matrix.length;
  const N = matrix[0].length;
  const dp = new Array(M).fill(0).map(_ => new Array(N).fill(0));
  const visited = new Set();

  const solve = (i, j) => {
    if (dp[i][j]) return dp[i][j];

    const key = N * i + j;
    if (visited.has(key)) return 0;
    visited.add(key);

    let currentMax = 1;
    if (i - 1 >= 0 && matrix[i][j] > matrix[i - 1][j]) currentMax = Math.max(currentMax, 1 + solve(i - 1, j));
    if (i + 1 < M && matrix[i][j] > matrix[i + 1][j]) currentMax = Math.max(currentMax, 1 + solve(i + 1, j));
    if (j - 1 >= 0 && matrix[i][j] > matrix[i][j - 1]) currentMax = Math.max(currentMax, 1 + solve(i, j - 1));
    if (j + 1 < N && matrix[i][j] > matrix[i][j + 1]) currentMax = Math.max(currentMax, 1 + solve(i, j + 1));
    dp[i][j] = currentMax;

    visited.delete(key);

    return currentMax;
  };

  let max = 1;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      max = Math.max(max, solve(i, j));
    }
  }

  return max;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ]),
);
