// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// 111. Minimum Depth of Binary Tree
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
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  if (!root) return 0;

  let depth = 1;
  let level = [root];

  while (level.length) {
    const children = [];

    for (const node of level) {
      if (!node.left && !node.right) return depth;
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }

    level = children;
    depth++;
  }

  return depth;
}
