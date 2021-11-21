// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
  let min = prices[0];
  let maxProfit = 0;

  for (const price of prices) {
    const currentProfit = price - min;
    maxProfit = Math.max(maxProfit, currentProfit);
    min = Math.min(price, min);
  }

  return maxProfit;
}
