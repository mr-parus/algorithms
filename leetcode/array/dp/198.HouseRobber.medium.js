// https://leetcode.com/problems/house-robber/description/
// 198. House Robber
// #array #dynamic_programming
// #medium

function rob(A) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < A.length; i++) {
    [a, b] = [b, Math.max(b, a + A[i])];
  }

  return b;
}
