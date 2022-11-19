// https://leetcode.com/problems/uncrossed-lines/description/
// 1035. Uncrossed Lines
// #array #dynamic_programming
// #medium

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function (A, B) {
  let M = A.length;
  let N = B.length;
  let memo = new Array(M + 1).fill(0).map(_ => new Array(N + 1).fill(0));

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (A[i] === B[j]) {
        memo[i + 1][j + 1] = 1 + memo[i][j];
      } else {
        memo[i + 1][j + 1] = Math.max(memo[i][j + 1], memo[i + 1][j]);
      }
    }
  }

  return memo[M][N];
};
