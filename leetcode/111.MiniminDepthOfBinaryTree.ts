// https://leetcode.com/problems/minimum-depth-of-binary-tree/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let depth = 1;

  for (let level = [root]; level.length;) {
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
