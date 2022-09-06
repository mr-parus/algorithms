// https://leetcode.com/problems/reverse-integer/
// #recursion #recursive_bottom_up #recursive_top_down

function reverse(x) {
  const MAX_INT = 2 ** 31;

  const up = (
    (power = 0) =>
    x =>
      x * 10 ** power++
  )();

  const down = x => {
    if (x === 0) return 0;
    const result = down(Math.trunc(x / 10)) + up(x % 10);
    return result > MAX_INT - 1 || result < -MAX_INT ? 0 : result;
  };

  return down(x);
}

// TESTS
const test = (f, result, ...args) => console.assert(f(...args) === result, `f(${args}) !== ${result}`);

test(reverse, 321, 123);
test(reverse, -321, -123);
test(reverse, -321, -123000);
