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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const stack = [root.left, root.right];

  while (stack.length) {
    const [a, b] = [stack.pop(), stack.pop()];

    if (!a && !b) continue;
    if (!(a && b) || a.val !== b.val) return false;

    stack.push(a.left, b.right, a.right, b.left);
  }

  return true;
};
