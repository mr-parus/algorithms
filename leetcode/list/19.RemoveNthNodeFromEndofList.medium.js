// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// 19. Remove Nth Node From End of List
// #linked_list #two_pointers
// #medium

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  let right = dummy;
  let left = dummy;

  for (let i = 0; i <= n; i++) right = right.next;

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};
