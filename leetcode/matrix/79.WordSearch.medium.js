// https://leetcode.com/problems/word-search/
// 79. Word Search
// #array #backtracking #matrix
// #medium

function exist(board, word) {
  if (!word.length) {
    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (word[0] === board[i][j] && canConstruct(board, i, j, word, [])) {
        return true;
      }
    }
  }

  return false;
}

function canConstruct(board, i, j, word, usedCoordinates) {
  if (!word.length) {
    return true;
  }

  const currentCoordinate = `${i}|${j}`;

  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[i].length ||
    usedCoordinates.includes(currentCoordinate) ||
    board[i][j] !== word[0]
  ) {
    return false;
  }

  const newUsedCoordinates = [...usedCoordinates, currentCoordinate];

  return (
    canConstruct(board, i + 1, j, word.slice(1), newUsedCoordinates) ||
    canConstruct(board, i - 1, j, word.slice(1), newUsedCoordinates) ||
    canConstruct(board, i, j + 1, word.slice(1), newUsedCoordinates) ||
    canConstruct(board, i, j - 1, word.slice(1), newUsedCoordinates)
  );
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE',
  ),
);
