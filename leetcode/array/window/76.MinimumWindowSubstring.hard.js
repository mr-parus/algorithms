// https://leetcode.com/problems/minimum-window-substring/description/
// 76. Minimum Window Substring
// #array #hash_table #string #sliding_window
// #hard

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let min = '';
  let minLength = Infinity;
  let left = 0;
  let required_ch = t.split('').reduce((a, c) => ({ ...a, [c]: (a[c] || 0) + 1 }), {});
  let required_l = Object.keys(required_ch).length;
  let used_l = 0;
  let used_ch = {};

  for (let right = 0; right < s.length; right++) {
    const rch = s[right];

    if (t.includes(rch)) {
      used_ch[rch] = (used_ch[rch] || 0) + 1;
      if (used_ch[rch] === required_ch[rch]) {
        used_l++;
      }
    }

    while (left <= right && used_l === required_l) {
      if (right - left < minLength) {
        minLength = right - left;
        min = s.substring(left, right + 1);
      }

      const lch = s[left];
      if (t.includes(lch)) {
        used_ch[lch] = used_ch[lch] - 1;
        if (used_ch[lch] < required_ch[lch]) {
          used_l--;
        }
      }

      left++;
    }
  }

  return min;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'aa'));
console.log(minWindow('bba', 'ab'));
