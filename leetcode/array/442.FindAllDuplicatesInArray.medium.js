// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
// 442. Find All Duplicates in an Array
// #array #hash_table
// #medium

/**
 * @param {number[]} A
 * @return {number[]}
 */
var findDuplicates = function (A) {
  const { abs } = Math;
  const N = A.length;
  const duplicates = [];

  for (let i = 0; i < N; i++) {
    const a = abs(A[i]);
    if (A[a - 1] < 0) duplicates.push(a);
    else A[a - 1] *= -1;
  }

  return duplicates;
};
