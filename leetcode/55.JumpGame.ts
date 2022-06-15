// https://leetcode.com/problems/jump-game/submissions/
function canJump(A: number[]): boolean {
  let power = 0;

  for (let i = 0; i < A.length; i++) {
    if (power < i) return false;
    power = Math.max(power, i + A[i]);
  }

  return true;
}
