// https://leetcode.com/problems/single-number/
function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b, 0);
}

console.log(singleNumber([1, 1, 2, 2, 3]));
