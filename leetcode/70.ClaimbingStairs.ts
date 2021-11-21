// https://leetcode.com/problems/climbing-stairs/
function climbStairs(n, memo = {}) {
  if (!(n in memo)) {
    if (n == 1) memo[n] = 1;
    else if (n == 2) memo[n] = 2;
    else memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  }

  return memo[n];
}

function climbStairs2(n: number) {
  if (n === 1) return 1;

  let n1 = 1;
  let n2 = 2;

  for (let i = 3; i < n + 1; i++) {
    const sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return n2;
}

console.log(climbStairs(4));
console.log(climbStairs2(4));
