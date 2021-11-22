// https://leetcode.com/problems/letter-case-permutation/
function letterCasePermutation(s: string, prefix = ''): string[] {
  if (prefix.length === s.length) {
    return [prefix];
  }

  const currentChar = s[prefix.length];

  if (Number.isNaN(+currentChar)) {
    return [
      ...letterCasePermutation(s, prefix + currentChar.toUpperCase()),
      ...letterCasePermutation(s, prefix + currentChar.toLowerCase()),
    ];
  } else {
    return letterCasePermutation(s, prefix + currentChar);
  }
}

console.log(letterCasePermutation('aaa'));
