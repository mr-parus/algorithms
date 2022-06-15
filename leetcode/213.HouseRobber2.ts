// https://leetcode.com/problems/house-robber-ii/submissions/
function rob(nums: number[]) {
  function rob2(A: number[]): number {
    let a = 0;
    let b = 0;

    for (let i = 0; i < A.length; i++) {
      [a, b] = [b, Math.max(b, a + A[i])];
    }

    return b;
  }

  return Math.max(rob2(nums.slice(1)), rob2(nums.slice(2, nums.length - 1)) + nums[0]);
}

console.log(rob([1, 2, 3, 4]));
console.log(rob([2, 3, 2]));
// console.log(rob([2, 3, 5, 1]));
