function maxSubArray(nums) {
  let sum = nums[0];
  let maxSum = sum;

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.assert(maxSubArray([-1, 1, 2, 3, -4]) === 6);
