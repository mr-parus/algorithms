// https://leetcode.com/problems/wildcard-matching/
// 44. Wildcard Matching
// #string #dynamic_programming #greedy #recursion
// #hard

function isMatch(s: string, p: string): boolean {
  s = s.replace(/(\*)\1+/g, '$1');

  function dfs(i: number, j: number, memo: Record<string, boolean>): boolean {
    const key = `${i}-${j}`;
    if (key in memo) return memo[key];

    if (i >= s.length && j >= p.length) return true;
    if (j > p.length) return false;

    const isMatch = i < s.length && (s[i] === p[j] || ['*', '?'].includes(p[j]));

    if (p[j] === '*') {
      memo[key] = dfs(i, j + 1, memo) || (isMatch && dfs(i + 1, j, memo));
    } else if (isMatch) {
      memo[key] = dfs(i + 1, j + 1, memo);
    } else {
      memo[key] = false;
    }

    return memo[key];
  }

  return dfs(0, 0, {});
}

for (const [s, p, result] of [
  ['aa', '*', '1'],
  ['lol', 'Works', '1'],
]) {
  if (isMatch(s, p) !== !!+result) throw [s, p];
  console.clear();
}
