// https://leetcode.com/problems/01-matrix/description/
// 542. 01 Matrix
// #array #dynamic_programming #breadth-first_search #matrix
// #medium

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var updateMatrix = function (A) {
  const M = A.length;
  const N = A[0].length;
  const queue = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (A[i][j] === 0) queue.push([i, j, 0]);
      else A[i][j] = -1;
    }
  }

  while (queue.length) {
    const [i, j] = queue.shift();
    const nextValue = A[i][j] + 1;

    if (i - 1 >= 0 && A[i - 1][j] === -1) {
      A[i - 1][j] = nextValue;
      queue.push([i - 1, j]);
    }

    if (i + 1 < M && A[i + 1][j] === -1) {
      A[i + 1][j] = nextValue;
      queue.push([i + 1, j]);
    }

    if (j - 1 >= 0 && A[i][j - 1] === -1) {
      A[i][j - 1] = nextValue;
      queue.push([i, j - 1]);
    }

    if (j + 1 < N && A[i][j + 1] === -1) {
      A[i][j + 1] = nextValue;
      queue.push([i, j + 1]);
    }
  }

  return A;
};

const A = [
  [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
];

const B = updateMatrix(A);

printMatrix(A);
printMatrix(B);

function printMatrix(A) {
  console.log('\n');
  console.log(A.map(r => r.map(c => c.toString().padStart(4, ' ')).join('')).join('\n'));
}
