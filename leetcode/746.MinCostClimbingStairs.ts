// https://leetcode.com/problems/min-cost-climbing-stairs/
function minCostClimbingStairs(A: number[]): number {
  let a = 0;
  let b = 0;

  for (let i = 2; i <= A.length; i++) {
    [a, b] = [b, Math.min(a + A[i - 2], b + A[i - 1])];
  }

  return b;
}
