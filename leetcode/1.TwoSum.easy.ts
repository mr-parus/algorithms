// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
  const visited = new Map<number, number>([[nums[0], 0]]);

  for (let i = 1; i < nums.length; i++) {
    const stored = visited.get(target - nums[i]);
    if (stored !== undefined) {
      return [stored, i];
    }

    visited.set(nums[i], i);
  }

  return [];
}
