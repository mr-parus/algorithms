// https://leetcode.com/problems/delete-and-earn/
function deleteAndEarn(nums: number[]): number {
  const A = new Array(Math.max(...nums)).fill(0);
  for (const num of nums) A[num - 1] += num;

  let a = 0;
  let b = 0;

  for (let i = 0; i < A.length; i++) {
    [a, b] = [b, Math.max(b, a + A[i])];
  }

  return b;
}
