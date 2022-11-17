// https://leetcode.com/problems/house-robber-iii/description/
// 337. House Robber III
// #dynamic_programming #tree #depth-first_search #binary_tree
// #medium

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
var rob = function (root) {
  function dfs(root) {
    if (!root) return [0, 0];
    const [l_take, l_skip] = dfs(root.left);
    const [r_take, r_skip] = dfs(root.right);
    const take = root.val + l_skip + r_skip;
    const skip = Math.max(l_take, l_skip) + Math.max(r_take, r_skip);
    return [take, skip];
  }

  return Math.max(...dfs(root));
};
