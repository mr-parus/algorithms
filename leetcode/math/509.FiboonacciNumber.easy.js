// https://leetcode.com/problems/fibonacci-number/description/
// 509. Fibonacci Number
// #math #dynamic_programming #recursion #memoization
// #easy

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;

  while (n--) {
    [a, b] = [b, a + b];
  }

  return a;
};
