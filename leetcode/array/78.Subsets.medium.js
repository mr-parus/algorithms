// https://leetcode.com/problems/subsets/
// 78. Subsets
// #array #backtracking #bit_manipulation
// #medium

function subsets(nums) {
  function backtracking(maxLength, toUseIndex, combination) {
    if (combination.length === maxLength) {
      return [combination];
    }

    const combinations = [];

    for (let i = toUseIndex; i < nums.length; i++) {
      combinations.push(...backtracking(maxLength, i + 1, [...combination, nums[i]]));
    }

    return combinations;
  }

  let result = [];

  for (let k = 1; k <= nums.length; k++) {
    result.push(...backtracking(k, 0, []));
  }

  return result;
}

// function subsets(nums) {
//   return nums.reduce((acc, num) => [...acc, ...acc.map(a => [...a, num])], [[]]);
// }

console.log(subsets([1, 2, 3]));
