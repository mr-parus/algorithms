// https://leetcode.com/problems/minimum-size-subarray-sum/
// 209. Minimum Size Subarray Sum
// #array #binary_search #sliding_window #prefix_sum
// #medium

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= target) {
      const current = end - start + 1;
      min = min === null ? current : Math.min(current, min);
      sum -= nums[start];
      start++;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
