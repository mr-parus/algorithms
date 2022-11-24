// https://leetcode.com/problems/jump-game-vi/
// 1696. Jump Game VI
// #array #dynamic_programming #queue #sliding_window #heap_(priority_queue) #monotonic_queue
// #medium

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  const N = nums.length;
  const queue = [N - 1];
  const dp = new Array(N);
  dp[N - 1] = nums.at(-1);

  for (let i = N - 2; i >= 0; i--) {
    const maxJumpIndex = queue.at(-1);
    const maxJumpScore = dp[maxJumpIndex];

    dp[i] = nums[i] + maxJumpScore;

    // keep element in queue in i+k range
    while (queue.length && queue.at(-1) > i + k - 1) queue.pop();

    // drop elements less than dp[i]
    while (dp[i] > dp[queue[0]]) queue.shift();

    queue.unshift(i);
  }

  return dp[0];
};

maxResult([1, -1, -2, 4, -7, 3], 2);
