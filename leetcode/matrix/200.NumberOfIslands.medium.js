// https://leetcode.com/problems/number-of-islands/
// 200. Number of Islands
// #array #depth-first_search #breadth-first_search #union_find #matrix
// #medium

/**
 * @param {string[][]} A
 * @return {number}
 */
var numIslands = function (A) {
  const M = A.length;
  const N = A[0].length;
  const Visited = Array.from({ length: M }).map(_ => new Array(N));

  let count = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!Visited[i][j] && A[i][j] === '1') {
        visit(i, j, M, N, A, Visited);
        count++;
      }
    }
  }

  return count;
};

function visit(i, j, m, n, A, Visited) {
  if (i < 0 || j < 0 || i >= m || j >= n || A[i][j] === '0' || Visited[i][j]) return;
  Visited[i][j] = 1;

  visit(i - 1, j, m, n, A, Visited);
  visit(i + 1, j, m, n, A, Visited);
  visit(i, j + 1, m, n, A, Visited);
  visit(i, j - 1, m, n, A, Visited);
}

numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]);
