// https://leetcode.com/problems/majority-element/
// 169. Majority Element
// #array #hash_table #divide_and_conquer #sorting #counting
// #easy

function majorityElement(nums: number[]): number {
  let votes = 1;
  let candidate = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) votes++;
    else {
      votes--;
      if (votes == 0) {
        votes = 1;
        candidate = nums[i];
      }
    }
  }

  return candidate;
}
