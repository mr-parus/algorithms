// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// 121. Best Time to Buy and Sell Stock
// #array #dynamic_programming
// #easy

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let buyPrice = prices[0];

  for (const price of prices) {
    const profit = price - buyPrice;
    maxProfit = Math.max(profit, maxProfit);
    buyPrice = Math.min(price, buyPrice);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
