// https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalN = nums1.length + nums2.length;
  const merged = [];

  for (let i = 0; i < totalN / 2 + 1; i++) {
    if (!nums2.length || nums1[0] < nums2[0]) {
      merged.push(nums1.shift());
    } else {
      merged.push(nums2.shift());
    }
  }

  if (Number.isInteger(totalN / 2)) {
    return (merged.pop() + merged.pop()) / 2;
  }

  return merged[merged.length - 2];
}

console.log(findMedianSortedArrays([1], [1]), 1);
console.log(findMedianSortedArrays([1, 2], []), 1.5);
console.log(findMedianSortedArrays([1, 2, 3], []), 2);
console.log(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
