// https://leetcode.com/problems/add-two-numbers/
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) return null;

  const currentSum = (l1?.val || 0) + (l2?.val || 0);

  if (currentSum < 10) {
    return new ListNode(currentSum, addTwoNumbers(l1?.next || null, l2?.next || null));
  } else {
    const currentSumString = currentSum.toString();
    const nextLeftNode = l1?.next || new ListNode();
    nextLeftNode.val += +currentSumString[0];

    return new ListNode(+currentSumString[1], addTwoNumbers(nextLeftNode, l2?.next || null));
  }
}
