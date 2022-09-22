// https://leetcode.com/problems/palindrome-linked-list/
// #list
function isPalindrome(head) {
  let leftCursor = head;

  const down = rightCursor => {
    // Upside down
    const { val: rightVal } = rightCursor;
    const prevResult = rightCursor.next ? down(rightCursor.next) : true;

    // Bottom up
    if (!prevResult) return false;
    const { val: leftVal } = leftCursor;
    leftCursor = leftCursor.next;
    return prevResult && rightVal === leftVal;
  };

  return down(head);
}
