// https://leetcode.com/problems/set-matrix-zeroes/description/
// 73. Set Matrix Zeroes
// #array #hash_table #matrix
// #medium

/**
 * @param {number[][]} A
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (A) {
  const M = A.length;
  const N = A[0].length;
  let col = false;
  let row = false;

  for (let i = 0; i < M; i++)
    for (let j = 0; j < N; j++)
      if (A[i][j] === 0) {
        if (i === 0) col = true;
        if (j === 0) row = true;
        A[i][0] = A[0][j] = 0;
      }

  for (let i = 1; i < M; i++) if (A[i][0] === 0) for (let j = 1; j < N; j++) A[i][j] = 0;

  for (let j = 1; j < N; j++) if (A[0][j] === 0) for (let i = 1; i < M; i++) A[i][j] = 0;

  if (col) for (let j = 1; j < N; j++) A[0][j] = 0;
  if (row) for (let i = 1; i < M; i++) A[i][0] = 0;
};
