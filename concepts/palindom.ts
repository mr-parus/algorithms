function isPalindrome(s: string): boolean {
  if (s.length === 0) return false;

  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
}

const testData: [boolean, string][] = [
  [true, 'zakaz'],
  [true, 'aba'],
  [true, 'aa'],
  [true, 'a'],
  [false, ''],
  [false, 'zaktz'],
];

for (const [result, string] of testData) {
  if (isPalindrome(string) !== result) {
    throw ['isPalindrome', isPalindrome(string), string];
  }
}
console.log('ok');
