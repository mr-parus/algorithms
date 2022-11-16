// https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
// 718. Maximum Length of Repeated Subarray
// #array #binary_search #dynamic_programming #sliding_window #rolling_hash #hash_function
// #medium

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const M = Array.from({ length: nums1.length }).map(_ => new Array(nums2.length).fill(0));
  let max = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (i < 1 || j < 1) {
          M[i][j] = 1;
        } else {
          M[i][j] = M[i - 1][j - 1] + 1;
        }
        max = Math.max(max, M[i][j]);
      }
    }
  }

  return max;
};

findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);
