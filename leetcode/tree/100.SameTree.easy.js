// https://leetcode.com/problems/same-tree/
// 100. Same Tree
// #tree #depth-first_search #breadth-first_search #binary_tree
// #easy


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function isSameTree(a, b) {
  const q = [a, b];

  while (q.length) {
    const a = q.pop();
    const b = q.pop();

    if (!a && !b) continue;
    if (a?.val !== b?.val) return false;

    q.push(a.left, b.left, a.right, b.right);
  }

  return true;
}

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!(p && q) || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
