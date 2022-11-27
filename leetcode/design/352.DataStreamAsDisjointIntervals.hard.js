// https://leetcode.com/problems/data-stream-as-disjoint-intervals/description/
// 352. Data Stream as Disjoint Intervals
// #binary_search #design #ordered_set
// #hard

var SummaryRanges = function () {
  this.ints = [];
};

SummaryRanges.prototype.addNum = function (val) {
  let l = 0;
  let r = this.ints.length - 1;

  while (l <= r) {
    const mid = Math.floor((r + l) / 2);
    const central = this.ints[mid];

    if (central[0] <= val && val <= central[1]) return;
    if (central[1] < val) {
      if (central[1] + 1 === val) {
        const next = this.ints[mid + 1];
        if (next && next[0] - 1 === val) {
          this.ints.splice(mid, 2, [central[0], next[1]]);
          return;
        }

        this.ints[mid][1] = val;
        return;
      }

      l = mid + 1;
    }

    if (val < central[0]) {
      if (central[0] - 1 === val) {
        const prev = this.ints[mid - 1];
        if (prev && prev[1] + 1 === val) {
          this.ints.splice(mid - 1, 2, [prev[0], central[1]]);
          return;
        }

        this.ints[mid][0] = val;
        return;
      }

      r = mid - 1;
    }
  }

  this.ints.splice(l, 0, [val, val]);
};

SummaryRanges.prototype.getIntervals = function () {
  return this.ints;
};

var obj = new SummaryRanges();
obj.addNum(6);
obj.addNum(6);
obj.addNum(0);
obj.addNum(4);
obj.addNum(8);
obj.addNum(7);
obj.addNum(6);
obj.addNum(4);
obj.addNum(7);
obj.addNum(5);
console.log(obj.getIntervals());
