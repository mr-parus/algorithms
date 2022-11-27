// https://leetcode.com/problems/move-zeroes/description/
// 283. Move Zeroes
// #array #two_pointers
// #easy

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const N = nums.length;
  let zeroStart = 0;

  for (let i = 0; i < N; i++) {
    if (nums[i] !== 0) {
      if (nums[zeroStart] !== nums[i]) nums[zeroStart] = nums[i];
      zeroStart++;
    }
  }

  for (let i = zeroStart; i < N; i++) {
    nums[i] = 0;
  }
};
