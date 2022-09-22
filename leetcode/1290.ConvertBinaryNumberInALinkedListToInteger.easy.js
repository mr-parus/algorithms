// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
// #list

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function getDecimalValue(head) {
  let result = 0;

  while (head) {
    result = (result << 1) + head.val;
    head = head.next;
  }

  return result;
}
