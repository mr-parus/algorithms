// https://leetcode.com/problems/house-robber/
function rob(nums: number[]): number {
  const houses = [0, 0, ...nums];

  for (let i = 2; i < houses.length; i++) {
    houses[i] = Math.max(houses[i - 1], houses[i - 2] + houses[i]);
  }

  return houses.pop();
}
