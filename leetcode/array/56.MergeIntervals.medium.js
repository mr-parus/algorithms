// https://leetcode.com/problems/merge-intervals/
// 56. Merge Intervals
// #array #sorting
// #medium

/**
 * @param {number[][]} arr
 * @return {number[][]}
 */
let merge = function (arr) {
  arr = arr.sort(([a], [b]) => a - b);

  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i][1] >= arr[i + 1][0]) {
      arr[i][1] = Math.max(arr[i + 1][1], arr[i][1]);
      arr.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return arr;
};
