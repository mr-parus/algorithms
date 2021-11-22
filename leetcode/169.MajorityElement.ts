// https://leetcode.com/problems/majority-element/
function majorityElement(nums: number[]): number {
  let votes = 1;
  let lastVoted = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === lastVoted) {
      votes++;
    } else {
      votes--;
      if (votes == 0) {
        votes = 1;
        lastVoted = nums[i];
      }
    }
  }

  return lastVoted;
}
