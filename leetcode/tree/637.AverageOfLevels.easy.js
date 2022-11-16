// https://leetcode.com/problems/average-of-levels-in-binary-tree/
// 637. Average of Levels in Binary Tree
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
 * @return {number[]}
 */
function averageOfLevels(root) {
  if (!root) return [];

  const result = [];
  let level = [root];

  while (level.length) {
    const children = [];

    let sum = 0;
    for (const node of level) {
      sum += node.val;
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }

    result.push(sum / level.length);
    level = children;
  }

  return result;
}
