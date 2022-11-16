// https://leetcode.com/problems/letter-case-permutation/
// 784. Letter Case Permutation
// #string #backtracking #bit_manipulation
// #medium

function letterCasePermutation(s: string, combination = ''): string[] {
  if (s.length === combination.length) {
    return [combination];
  }

  const currentChar = s[combination.length];

  if (Number.isNaN(+currentChar)) {
    return [
      ...letterCasePermutation(s, combination + currentChar.toUpperCase()),
      ...letterCasePermutation(s, combination + currentChar.toLowerCase()),
    ];
  } else {
    return letterCasePermutation(s, combination + currentChar);
  }
}

console.log(letterCasePermutation('aaa'));
