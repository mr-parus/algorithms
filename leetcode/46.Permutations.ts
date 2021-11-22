// https://leetcode.com/problems/permutations/
function permute(nums: number[], word: number[] = [], n: number = nums.length): number[][] {
  if (word.length === n) {
    return [word];
  }

  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const notUsed = [...nums.slice(0, i), ...nums.slice(i + 1)];
    result.push(...permute(notUsed, [...word, nums[i]], n));
  }

  return result;
}

function permute2(nums: number[], current = 0): number[][] {
  if (current === nums.length) {
    return [[...nums]];
  }

  const result = [];

  for (let i = current; i < nums.length; i++) {
    [nums[i], nums[current]] = [nums[current], nums[i]];
    result.push(...permute2(nums, current + 1));
    [nums[i], nums[current]] = [nums[current], nums[i]];
  }

  return result;
}

console.log(permute2([1, 2, 3]));
