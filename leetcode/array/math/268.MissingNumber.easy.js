// https://leetcode.com/problems/missing-number/
// 268. Missing Number
// #array #hash_table #math #binary_search #bit_manipulation #sorting
// #easy

// sum(n) = n(n+1)/2

function missingNumber(nums) {
  const expectedSum = ((nums.length + 1) * nums.length) / 2;
  const realSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - realSum;
}
