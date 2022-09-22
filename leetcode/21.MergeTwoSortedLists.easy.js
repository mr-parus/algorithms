// https://leetcode.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    }

    return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
};
