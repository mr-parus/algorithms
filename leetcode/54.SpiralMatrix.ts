// https://leetcode.com/problems/spiral-matrix/
// https://www.youtube.com/watch?v=l43CV-tPbVA
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let direction = 0;

  while (left <= right && top <= bottom) {
    if (direction == 0) {
      for (let i = left; i <= right; i++) result.push(matrix[top][i]);

      top += 1;
      direction = 1;
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);

      right -= 1;
      direction = 2;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);

      bottom -= 1;
      direction = 3;
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);

      left += 1;
      direction = 0;
    }
  }

  return result;
}

spiralOrder([
  [1, 1, 1, 1],
  [4, 1, 1, 2],
  [4, 3, 2, 2],
  [3, 3, 3, 2],
]);

spiralOrder([
  [1, 1, 1, 1],
  [4, 1, 1, 2],
  [4, 4, 2, 2],
  [4, 4, 2, 2],
  [4, 4, 2, 2],
  [4, 4, 2, 2],
  [3, 3, 3, 2],
]);

spiralOrder([
  [1, 1, 1, 1, 1, 1],
  [4, 1, 1, 1, 2, 2],
  [3, 3, 3, 3, 3, 2],
]);

spiralOrder([
  [1, 1],
  [3, 2],
  [3, 2],
  [3, 2],
]);

spiralOrder([[1], [2], [2], [2]]);
