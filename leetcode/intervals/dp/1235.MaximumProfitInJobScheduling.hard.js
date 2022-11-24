// https://leetcode.com/problems/maximum-profit-in-job-scheduling/
// 1235. Maximum Profit in Job Scheduling
// #array #binary_search #dynamic_programming #sorting
// #hard

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const N = startTime.length;
  const dp = Array.from({ length: N });
  const intervals = Array.from({ length: N })
    .map((_, i) => ({
      s: startTime[i],
      e: endTime[i],
      p: profit[i],
    }))
    .sort((a, b) => a.s - b.s);

  const getMaxProfit = i => {
    if (i >= N) return 0;
    if (dp[i]) return dp[i];

    let nextI = i + 1;
    while (nextI < N && intervals[i].e > intervals[nextI].s) nextI++;

    dp[i] = Math.max(intervals[i].p + getMaxProfit(nextI), getMaxProfit(i + 1));

    return dp[i];
  };

  return getMaxProfit(0);
};

console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]));
