// https://leetcode.com/problems/rotate-image/
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  for (let c = 0; c < (n / 2) >> 0; c++) {
    for (let i = c; i < n - 1 - c; i++) {
      // AB
      // DC
      const temp = matrix[c][i]; // temp = A
      matrix[c][i] = matrix[n - 1 - i][c]; // A = D
      matrix[n - 1 - i][c] = matrix[n - 1 - c][n - 1 - i]; // D = C
      matrix[n - 1 - c][n - 1 - i] = matrix[i][n - 1 - c]; // C = B
      matrix[i][n - 1 - c] = temp; // B = temp(A)
    }
  }
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // [[7,4,1],[8,5,2],[9,6,3]]
