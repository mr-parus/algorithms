// https://leetcode.com/problems/path-sum/
// 112. Path Sum
// #tree #depth-first_search #breadth-first_search #binary_tree
// #easy

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  if (!root) return false;

  const newTargetSum = targetSum - root.val;

  if (!root.left && !root.right) return newTargetSum === 0;

  return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum);
}
