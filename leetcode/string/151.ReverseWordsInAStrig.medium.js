// https://leetcode.com/problems/reverse-words-in-a-string/description/
// 151. Reverse Words in a String
// #two_pointers #string
// #medium

var reverseWords = function (s) {
  let reverted = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      let word = s[i];
      while (s[++i] !== ' ' && i < s.length) word += s[i];
      reverted = word + (reverted.length ? ' ' + reverted : reverted);
    }
  }

  return reverted;
};

console.log(reverseWords('aa bb cc'));
