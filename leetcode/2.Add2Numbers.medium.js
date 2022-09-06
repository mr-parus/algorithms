// https://leetcode.com/problems/add-two-numbers/
// #list

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  get digit() {
    let cursor = this;
    let value = this.val;
    let multiplier = 1;

    while ((cursor = cursor.next)) {
      multiplier *= 10;
      value += cursor.val * multiplier;
    }

    return value;
  }
}

function addTwoNumbers(l1, l2) {
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

const a = new ListNode(5, new ListNode(5, new ListNode(5, null)));
const b = new ListNode(5, new ListNode(5, new ListNode(5, null)));

console.assert(addTwoNumbers(a, b).digit === 1110);
