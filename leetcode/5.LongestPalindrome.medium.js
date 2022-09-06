// https://leetcode.com/problems/longest-palindromic-substring/solution/

function longestPalindrome(s) {
  const N = s.length;
  const cache = Array.from({ length: N }).map(() => Array.from({ length: N }).map(() => []));
  let maxStart = 0;
  let maxEnd = 0;

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < N - i; j++) {
      const start = j;
      const end = j + i;
      const chunkLength = end - start + 1;
      const isPalindrome =
        chunkLength < 4 ? s.at(start) === s.at(end) : s.at(start) === s.at(end) && cache[start + 1][end - 1][0];

      console.log(s.substring(start, end + 1), isPalindrome);

      cache[start][end] = [isPalindrome, s.substring(start, end + 1)];

      if (isPalindrome && end - start > maxEnd - maxStart) {
        maxStart = start;
        maxEnd = end;
      }
    }
  }

  // console.log(cache.map(row => row.map(([a, s]) => (s + '-' + a).padEnd(20)).join(' ')).join('\n'));

  return s.substring(maxStart, maxEnd + 1);
}

console.log(longestPalindrome('cbbd'));
