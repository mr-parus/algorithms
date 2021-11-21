// https://leetcode.com/problems/binary-search/
function search(nums: number[], target: number): number {
  const n = nums.length;

  let l = 0;
  let r = n - 1;

  while (l <= r) {
    const middle = (l + (r - l) / 2) >> 0;
    console.log(l, middle, r);

    if (nums[middle] === target) return middle;

    if (nums[middle] < target) l = middle + 1;
    else r = middle - 1;
  }

  return -1;
}
