// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
  let used = '';
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (used.includes(s[i])) {
      used = used.substring(used.indexOf(s[i]) + 1);
    }

    used += s[i];
    longest = Math.max(longest, used.length);
  }

  return longest;
}

console.log(lengthOfLongestSubstring('aa'), 1);
console.log(lengthOfLongestSubstring('aba'), 2);
console.log(lengthOfLongestSubstring('anviaj'), 5);
console.log(lengthOfLongestSubstring('pwwkew'), 3);
console.log(lengthOfLongestSubstring('aabaab!bb'), 3);
