// https://leetcode.com/problems/binary-search/description/
// 704. Binary Search
// #array #binary_search
// #easy

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const i = (left + (right - left) / 2) | 0;

    if (nums[i] === target) return i;

    if (target > nums[i]) left = i + 1;
    else right = i - 1;
  }

  return -1;
};
