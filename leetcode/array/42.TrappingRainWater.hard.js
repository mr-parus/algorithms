// https://leetcode.com/problems/trapping-rain-water/description/
// 42. Trapping Rain Water
// #array #two_pointers #dynamic_programming #stack #monotonic_stack
// #hard

/**
 * @param {number[]} A
 * @return {number}
 */
var trap = function (A) {
  const stack = [];
  let result = 0;

  for (let rightHIndex = 0; rightHIndex < A.length; rightHIndex++) {
    const rightH = A[rightHIndex];
    let lastH = 0;

    while (stack.length) {
      const leftHIndex = stack.pop();
      const leftH = A[leftHIndex];
      const H = Math.min(leftH, rightH);
      const W = rightHIndex - leftHIndex - 1;
      const S = (H - lastH) * W;
      lastH = H;
      result += S;

      if (leftH > rightH) {
        stack.push(leftHIndex);
        break;
      }
    }

    if (rightH > 0) stack.push(rightHIndex);
  }

  return result;
};
