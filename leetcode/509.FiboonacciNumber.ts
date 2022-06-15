// https://leetcode.com/problems/fibonacci-number/
// 0 1 2 3 4 5 6
// 0 1 1 2 3 5 8

function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;

  for (let i = 2; i < n + 1; i++) [a, b] = [b, a + b];

  return b;
}
