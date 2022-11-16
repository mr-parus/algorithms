// https://leetcode.com/problems/binary-tree-inorder-traversal/description/
// 94. Binary Tree Inorder Traversal
// #stack #tree #depth-first_search #binary_tree
// #easy

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (node.left) {
      stack.push(new TreeNode(node.val, null, node.right));
      stack.push(node.left);
      continue;
    }

    result.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }
  }

  return result;
};
