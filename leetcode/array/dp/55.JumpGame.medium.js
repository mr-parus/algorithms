// https://leetcode.com/problems/jump-game/description/
// 55. Jump Game
// #array #dynamic_programming #greedy
// #medium

var canJump = function (nums) {
  let i = 1;
  let power = nums[0];

  while (power && i < nums.length) {
    power = Math.max(power - 1, nums[i]);
    i++;
  }

  return i === nums.length;
};
