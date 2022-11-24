// https://leetcode.com/problems/subsets/
// 78. Subsets
// #array #backtracking #bit_manipulation
// #medium

function subsets(nums) {
  function backtracking(toUseIndex, combination) {
    if (combination.length > nums.length) return;

    const combinations = [combination];

    for (let i = toUseIndex; i < nums.length; i++) {
      combinations.push(...backtracking(i + 1, [...combination, nums[i]]));
    }

    return combinations;
  }

  return backtracking(0, []);
}

// function subsets(nums) {
//   return nums.reduce((acc, num) => [...acc, ...acc.map(a => [...a, num])], [[]]);
// }

console.log(subsets([1, 2, 3]));
