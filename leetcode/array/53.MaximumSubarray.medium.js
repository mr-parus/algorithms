// https://leetcode.com/problems/maximum-subarray/
// 53. Maximum Subarray
// #array #divide_and_conquer #dynamic_programming
// #medium

function maxSubArray(nums) {
  let sum = nums[0];
  let maxSum = sum;

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}
