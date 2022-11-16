// https://leetcode.com/problems/reverse-linked-list/description/
// 206. Reverse Linked List
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
 * @return {ListNode}
 */

var reverseList = function (head) {
  let current = head;
  let prev = null;

  while (current) {
    const { next } = current;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
