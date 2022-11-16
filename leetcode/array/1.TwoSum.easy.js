// https://leetcode.com/problems/two-sum/
// 1. Two Sum
// #array #hash_table
// #easy

function twoSum(nums, target) {
  const visited = new Map([[nums[0], 0]]);

  for (let i = 1; i < nums.length; i++) {
    const stored = visited.get(target - nums[i]);
    if (stored !== undefined) {
      return [stored, i];
    }

    visited.set(nums[i], i);
  }

  return [];
}
