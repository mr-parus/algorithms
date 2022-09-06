function printMatrix(m: string[][]) {
  for (const row of m) {
    console.log(row.map(a => a.toString().padStart(4)).join(''));
  }
  console.log('\n');
}

function longestPalindrome(s: string) {
  if (s.length === 0) return 0;
  if (s.length === 1) return s;

  const matrix = Array.from({ length: s.length }).map(_ => new Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) matrix[i][i] = 1;

  let maxKey = { i: 0, j: 0 };
  let maxLength = 0;

  for (let step = 2; step <= s.length; step++) {
    for (let i = 0; i <= s.length - step; i++) {
      const j = i + step - 1;

      if (s[i] == s[j] && step == 2) {
        matrix[i][j] = 2;
      } else if (s[i] == s[j]) {
        matrix[i][j] = matrix[i + 1][j - 1] + 2;
      } else {
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i + 1][j]);
      }

      if (matrix[i][j] > maxLength) {
        maxLength = matrix[i][j];
        maxKey = { i, j };
      }
    }
  }

  return s.substring(maxKey.i, maxKey.j + 1);
}

console.log(longestPalindrome('aacabdkacaa'));
