// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
// 28. Find the Index of the First Occurrence in a String
// #two_pointers #string #string_matching
// #medium

function contains(startIndex, string, substring) {
  for (let i = 0; i < substring.length; i++) {
    if (string[startIndex + i] !== substring[i]) {
      return false;
    }
  }
  return true;
}

function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (contains(i, haystack, needle)) return i;
  }

  return -1;
}
