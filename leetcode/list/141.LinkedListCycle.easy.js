// https://leetcode.com/problems/linked-list-cycle/
// 141. Linked List Cycle
// #hash_table #linked_list #two_pointers
// #easy

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
