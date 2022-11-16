// https://leetcode.com/problems/permutations/
// 46. Permutations
// #array #backtracking
// #medium

function permute(nums, current = 0) {
  if (current === nums.length) {
    return [[...nums]];
  }

  const result = [];

  for (let i = current; i < nums.length; i++) {
    [nums[i], nums[current]] = [nums[current], nums[i]];
    result.push(...permute(nums, current + 1));
    [nums[i], nums[current]] = [nums[current], nums[i]];
  }

  return result;
}

console.log(permute([1, 2, 3]));
