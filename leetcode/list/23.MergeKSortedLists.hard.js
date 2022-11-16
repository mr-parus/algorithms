// https://leetcode.com/problems/merge-k-sorted-lists/description/
// 23. Merge k Sorted Lists
// #linked_list #divide_and_conquer #heap_(priority_queue) #merge_sort
// #hard

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
  }

  return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
};

var mergeKLists = function (lists) {
  if (!lists.length) return null;

  while (lists.length > 1) {
    const merged = mergeTwoLists(lists.pop(), lists.pop());
    lists.unshift(merged);
  }

  return lists[0];
};
