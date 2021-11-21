// https://leetcode.com/problems/average-of-levels-in-binary-tree/

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


function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];

  const result = [];

  for (let level = [root]; level.length;) {
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
