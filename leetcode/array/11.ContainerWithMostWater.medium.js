// https://leetcode.com/problems/container-with-most-water/
// 11. Container With Most Water
// #array #two_pointers #greedy
// #medium

function maxArea(height) {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[r], height[l]) * (r - l);
    maxArea = Math.max(area, maxArea);
    height[l] > height[r] ? r-- : l++;
  }

  return maxArea;
}

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
