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
