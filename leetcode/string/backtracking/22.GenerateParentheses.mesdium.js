// https://leetcode.com/problems/generate-parentheses/description/
// 22. Generate Parentheses
// #string #dynamic_programming #backtracking
// #medium

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const results = [];
  const N = n * 2;

  const backtracking = (combination = '', openedNeed, closedNeed) => {
    if (combination.length === N) {
      results.push(combination);
      return;
    }

    if (openedNeed > 0) {
      backtracking(combination + '(', openedNeed - 1, closedNeed + 1);
    }

    if (closedNeed > 0) {
      backtracking(combination + ')', openedNeed, closedNeed - 1);
    }
  };

  backtracking('', n, 0);

  return results;
};
