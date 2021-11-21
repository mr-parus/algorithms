// https://leetcode.com/problems/subsets/
function subsets(nums: number[]): number[][] {
  let result: number[][] = [[]];

  for (const element of nums) {
    result = [...result, ...result.map(a => [...a, element])];
  }

  return result;
}
