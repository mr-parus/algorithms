// https://leetcode.com/problems/merge-two-sorted-lists/
// 21. Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
  }

  return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
};
