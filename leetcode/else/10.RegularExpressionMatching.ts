// https://leetcode.com/problems/regular-expression-matching/
function isMatch(s: string, p: string): boolean {
  s = s.replace(/(.\*)\1+/g, '$1');

  function dfs(i: number, j: number, memo: Record<string, boolean>): boolean {
    const key = `${i}-${j}`;
    if (key in memo) return memo[key];

    if (i >= s.length && j >= p.length) return true;
    if (j > p.length) return false;

    const isMatch = i < s.length && (s[i] === p[j] || p[j] === '.');

    if (j + 1 < p.length && p[j + 1] === '*') {
      memo[key] = dfs(i, j + 2, memo) || (isMatch && dfs(i + 1, j, memo));
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
  ['aaaaaaaaaaaaab', 'a*a*a*a*a*a*a*a*a*a*c', '0'],
  ['ab', '.*c'],
  ['aaa', 'aaa', '1'],
  ['aaa', '...', '1'],
  ['aaa', '....', '0'],
  ['abaz', 'a.a.', '1'],
  ['aaa', 'a.b*a', '1'],
  ['aaa', '.*', '1'],
  ['', '.*', '1'],
  ['aaa', 'a..*', '1'],
  ['all good!', 'lol', '1'],
]) {
  if (isMatch(s, p) !== !!+result) throw [s, p];
  console.clear();
}
