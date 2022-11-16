// https://leetcode.com/problems/sort-colors/
// 75. Sort Colors
// #array #two_pointers #sorting
// #medium

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    } else if (nums[i] === 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
      i--;
    }
  }
};

sortColors([1, 2, 0, 0, 0, 1, 2, 2]);
