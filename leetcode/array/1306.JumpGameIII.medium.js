// https://leetcode.com/problems/jump-game-iii/description/
// 1306. Jump Game III
// #array #depth-first_search #breadth-first_search
// #medium

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  if (start >= arr.length || start < 0 || arr[start] < 0) return false;
  if (arr[start] === 0) return true;

  const power = arr[start];
  arr[start] *= -1;

  return canReach(arr, start + power) || canReach(arr, start - power);
};
