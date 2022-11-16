// https://leetcode.com/problems/contains-duplicate/
// 217. Contains Duplicate
// #array #hash_table #sorting
// #easy

function containsDuplicate(nums) {
  let used = new Set();

  for (const n of nums) {
    if (used.has(n)) {
      return true;
    }

    used.add(n);
  }

  return false;
}
