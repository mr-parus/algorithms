// https://leetcode.com/problems/3sum/
// 15. 3Sum
// #array #two_pointers #sorting
// #medium

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  const results = [];
  const N = sorted.length;

  for (let i = 0; i < N; i++) {
    if (i > 0 && sorted[i - 1] === sorted[i]) {
      continue;
    }

    let left = i + 1;
    let right = N - 1;

    while (left < right) {
      if (right < N - 1 && nums[right] === nums[right + 1]) {
        right--;
        continue;
      }

      const result = [sorted[i], sorted[left], sorted[right]];
      const resultSum = result.reduce((a, b) => a + b);

      if (resultSum === 0) {
        results.push(result);
        left++;
        right--;
      } else if (resultSum > 0) {
        right--;
      } else left++;
    }
  }

  return results;
};
