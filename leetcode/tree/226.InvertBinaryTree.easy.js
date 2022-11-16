// https://leetcode.com/problems/invert-binary-tree/
// 226. Invert Binary Tree
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

function invertTree(root) {
  if (!root) return null;
  if (!root.left && !root.right) return root;

  [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];

  return root;
}
