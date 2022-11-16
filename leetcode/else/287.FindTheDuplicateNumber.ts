// https://leetcode.com/problems/find-the-duplicate-number/
function findDuplicate(nums: number[]): number {
  let fast = nums[0];
  let slow = nums[0];

  const q = [slow + '->'];

  do {
    q.push(nums[slow] + '->')
    console.log({fast, slow})
    fast = nums[nums[fast]];
    slow = nums[slow];
    console.log({fast, slow}, '\n')
  } while (fast !== slow);

  console.log(q.join(''), '\n')


  slow = nums[0]
  while (fast !== slow) {
    console.log({fast, slow})
    slow = nums[slow]
    fast = nums[fast]
    console.log({fast, slow}, '\n')
  }

  return slow;
}

console.log(findDuplicate([1, 3, 4, 2, 2]))
