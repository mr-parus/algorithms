// https://leetcode.com/problems/binary-tree-postorder-traversal/
// 145. Binary Tree Postorder Traversal
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
var postorderTraversal = function (root) {
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

    if (node.right) {
      stack.push(new TreeNode(node.val, null, null));
      stack.push(node.right);
      continue;
    }

    result.push(node.val);
  }

  return result;
};

// var postorderTraversal = function (root, result = []) {
//   if (!root) return result;
//   if (root.left) postorderTraversal(root.left, result);
//   if (root.right) postorderTraversal(root.right, result);
//   result.push(root.val);
//   return result;
// };
