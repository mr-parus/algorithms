// https://leetcode.com/problems/ransom-note/
// 383. Ransom Note
// #hash_table #string #counting
// #easy

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = {};

  for (const ch of magazine.split('')) map[ch] = (map[ch] || 0) + 1;

  for (const ch of ransomNote.split('')) {
    if (!map[ch]) return false;
    map[ch] = map[ch] - 1;
  }

  return true;
};
