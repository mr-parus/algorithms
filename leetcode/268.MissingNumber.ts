// https://leetcode.com/problems/missing-number/
function missingNumber(nums: number[]): number {
  return ((nums.length + 1) * nums.length) / 2 - nums.reduce((a, b) => a + b, 0);
}
