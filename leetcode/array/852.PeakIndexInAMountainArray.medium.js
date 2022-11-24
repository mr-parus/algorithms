// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
// 852. Peak Index in a Mountain Array
// #array #binary_search
// #medium

/**
 * @param {number[]} arr
 * @return {number}
 */

var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid + 1] > arr[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
};
