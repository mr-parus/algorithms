// https://leetcode.com/problems/pizza-with-3n-slices/
// #dynamic_programming

function maxSizeSlices(slices) {
  const N = slices.length;
  const minIndex = slices.indexOf(Math.min(...slices)) + 1;
  const orderedSlices = Array.from(Array(N)).map((_, i) => slices[(i + minIndex) % N]);
  const cache = {};

  console.log(orderedSlices);

  function dp(i, toChose) {
    if (i >= N || toChose <= 0) return 0;

    const key = `${i}|${toChose}`;
    if (key in cache) return cache[key];

    const resultIfSkipped = dp(i + 1, toChose);
    const resultIfChosen = orderedSlices[i] + dp(i + 2, toChose - 1);

    return (cache[key] = Math.max(resultIfChosen, resultIfSkipped));
  }

  return dp(0, N / 3);
}

console.log(maxSizeSlices([7, 8, 5, 6, 9, 10, 1, 6, 5, 10, 8]));
