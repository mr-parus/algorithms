// https://leetcode.com/problems/remove-linked-list-elements/
// 203. Remove Linked List Elements
// #linked_list #recursion
// #easy

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  const result = new ListNode(0, head);

  for (let current = result; current.next; ) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return result.next;
}
