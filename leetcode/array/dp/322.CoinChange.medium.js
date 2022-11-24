// https://leetcode.com/problems/coin-change/description/
// 322. Coin Change
// #array #dynamic_programming #breadth-first_search
// #medium

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let c of coins) {
      if (i - c >= 0 && dp[i - c] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
