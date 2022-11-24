// https://leetcode.com/problems/combination-sum/
// 39. Combination Sum
// #string #backtracking #hash_table #counting
// #medium

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const counts = {};
  for (const t of tiles) {
    counts[t] = (counts[t] || 0) + 1;
  }

  let combinations = [];

  const backtracking = combination => {
    if (combination) combinations.push(combination);

    // skipping duplicates
    for (const t in counts) {
      if (counts[t] <= 0) continue;

      counts[t] = counts[t] - 1;
      backtracking(combination + t);
      counts[t] = counts[t] + 1;
    }
  };

  backtracking('');

  return combinations.length;
};

// [AAB]
//  |- A[AB]
//  |- A[AB]
//      |- AA[B]
//      |- AAB
//  |- B[AA]
//      |- BA[A]
//      |- BA[A]
//          |- BAA

numTilePossibilities('AAB');
