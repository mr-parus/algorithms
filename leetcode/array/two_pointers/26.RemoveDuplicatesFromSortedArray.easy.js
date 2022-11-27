// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// 26. Remove Duplicates from Sorted Array
// #array #two_pointers
// #easy

function removeDuplicates(nums) {
  let lastUniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[lastUniqueIndex] !== nums[i]) {
      nums[++lastUniqueIndex] = nums[i];
    }
  }

  return lastUniqueIndex + 1;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
