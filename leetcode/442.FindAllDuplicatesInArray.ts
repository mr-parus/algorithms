// https://leetcode.com/problems/find-all-duplicates-in-an-array/
function findDuplicates(nums: number[]): number[] {
  const result = [];
  const abs = Math.abs;

  for (let i = 0; i < nums.length; i++) {
    if (nums[abs(nums[i]) - 1] < 0) {
      result.push(Math.abs(nums[i]));
    }

    nums[abs(nums[i]) - 1] *= -1;
  }

  return result;
}
