/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const stack = [0];
  let segment = 0;
  let level = 0;
  let maxLength = 0;

  for (let i = 0; i <= input.length; i++) {
    if (i === input.length || input[i] === '\n') {
      stack.length = level;
      const prefixLength = stack.at(-1) || 0;

      if (segment.includes('.')) {
        maxLength = Math.max(maxLength, prefixLength + segment.length);
      } else {
        stack.push(prefixLength + segment.length + 1);
      }

      level = 0;
      segment = '';
      continue;
    }

    if (input[i] === '\t') {
      level++;
      continue;
    }

    segment += input[i];
  }

  return maxLength;
};
