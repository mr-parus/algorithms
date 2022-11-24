// https://leetcode.com/problems/combination-sum/
// 39. Combination Sum
// #array #backtracking
// #medium

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b); // Optimization
  const combinations = [];

  function backtracking(start, combination, target) {
    if (target === 0) {
      combinations.push(combination);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const nextTarget = target - candidates[i];
      if (nextTarget < 0) break; // Optimization to stop early
      backtracking(i, combination.concat(candidates[i]), nextTarget);
    }
  }

  backtracking(0, [], target);

  return combinations;
};

combinationSum([2, 3, 6, 7], 7);

// [2367]
//  |- 2[2367]
//  |- 3[367]
//  |- 6[67]
//  |- 7[7]
