// https://leetcode.com/problems/same-tree/

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

function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
  const q = [a, b];

  while (q.length) {
    const a = q.pop();
    const b = q.pop();

    if (!a && !b) continue;
    if (a?.val !== b?.val) return false;

    q.push(a.left, b.left, a.right, b.right);
  }

  return true;
}
