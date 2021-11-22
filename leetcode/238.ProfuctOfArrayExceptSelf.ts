// https://leetcode.com/problems/product-of-array-except-self/
function productExceptSelf(nums: number[]): number[] {
  if (nums.length < 2) return nums;

  const leftToRight = new Array(nums.length).fill(1);
  const rightToLeft = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) leftToRight[i] = leftToRight[i - 1] * nums[i - 1];

  for (let i = nums.length - 2; i >= 0; i--) rightToLeft[i] = rightToLeft[i + 1] * nums[i + 1];

  const result = [];

  for (let i = 0; i < leftToRight.length; i++) {
    result[i] = leftToRight[i] * rightToLeft[i];
  }

  return result;
}
