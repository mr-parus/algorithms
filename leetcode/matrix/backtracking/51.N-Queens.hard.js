// https://leetcode.com/problems/n-queens/description/
// 51. N-Queens
// #array #backtracking
// #hard

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  return solve(n, [], []);
};

function solve(n, board, results) {
  if (board.length === n) {
    const boardString = board.map(queenX => '.'.repeat(queenX) + 'Q' + '.'.repeat(n - queenX - 1));
    results.push(boardString);
    return;
  }

  for (let i = 0; i < n; i++) {
    board.push(i);
    if (valid(board)) solve(n, board, results);
    board.pop();
  }

  return results;
}

function valid(board) {
  const queenY = board.length - 1;
  const queenX = board[queenY];

  for (let y = 0; y < queenY; y++) {
    const x = board[y];
    const dx = Math.abs(queenX - x);
    const dy = queenY - y;

    // dx == 0  – стоят на одной вертикали
    // dx == dy – стоят на одной диагонали
    if (dx === 0 || dx === dy) {
      return false;
    }
  }

  return true;
}

solveNQueens(6)
  .map(m => m.join('\n'))
  .forEach(a => console.log(a, '\n'));
