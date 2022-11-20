// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
// 105. Construct Binary Tree from Preorder and Inorder Traversal
// #array #hash_table #divide_and_conquer #tree #binary_tree
// #medium

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const rootValue = preorder[0];

  const inOrderRootIndex = inorder.indexOf(rootValue);
  const leftInorder = inorder.slice(0, inOrderRootIndex);
  const rightInOrder = inorder.slice(inOrderRootIndex + 1);

  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);

  const left = buildTree(leftPreorder, leftInorder);
  const right = buildTree(rightPreorder, rightInOrder);
  return new TreeNode(rootValue, left, right);
};
