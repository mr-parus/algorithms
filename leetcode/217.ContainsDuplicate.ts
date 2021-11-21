/**
 https://leetcode.com/problems/contains-duplicate/submissions/
 */
function containsDuplicate(nums: number[]): boolean {
  let used = new Set();

  for (const n of nums) {
    if (used.has(n)) {
      return true;
    }

    used.add(n);
  }

  return false;
}
