// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/
function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length;) {
    const pos = nums[i] - 1;

    if (nums[i] !== nums[pos]) {
      const temp = nums[i];
      nums[i] = nums[pos];
      nums[pos] = temp;
    } else {
      i++;
    }
  }

  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) {
      result.push(i + 1);
    }
  }

  return result;
}

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); // [5,6]
