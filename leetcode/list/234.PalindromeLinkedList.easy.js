// https://leetcode.com/problems/palindrome-linked-list/
// 234. Palindrome Linked List
// #linked_list #two_pointers #stack #recursion
// #easy

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let leftCursor = head;

  const down = currentNode => {
    // Upside down
    if (!currentNode) return true;
    if (!down(currentNode.next)) return false;

    // Bottom up
    if (currentNode.val !== leftCursor.val) return false;
    leftCursor = leftCursor.next;
    return true;
  };

  return down(head);
}

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))));
