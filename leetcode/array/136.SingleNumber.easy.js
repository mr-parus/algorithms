// https://leetcode.com/problems/single-number/
// 136. Single Number
// #array #bit_manipulation
// #easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b, 0);
};

console.log(singleNumber([1, 1, 2, 2, 3]));
