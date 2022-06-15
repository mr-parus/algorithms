// https://leetcode.com/problems/house-robber/
function rob(A: number[]): number {
  let a = 0;
  let b = 0;

  for (let i = 0; i < A.length; i++) {
    [a, b] = [b, Math.max(b, a + A[i])];
  }

  return b;
}
