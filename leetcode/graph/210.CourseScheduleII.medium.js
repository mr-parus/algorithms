// https://leetcode.com/problems/course-schedule-ii/description/
// 210. Course Schedule II
// #depth-first_search #breadth-first_search #graph #topological_sort
// #medium

/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (n, prerequisites) {
  const graph = new Map();
  for (const [a, b] of prerequisites) graph.set(a, (graph.get(a) || []).concat(b));

  const VISITED = 1;
  const SELECTED = 2;
  const status = new Map();

  const selected = [];

  function canVisit(node) {
    const nodeStatus = status.get(node);
    if (nodeStatus) return;
    status.set(node, VISITED);

    for (const child of graph.get(node) || []) {
      if (status.get(child) === VISITED) return;
      if (status.get(child) === SELECTED) continue;
      canVisit(child);
    }

    status.set(node, SELECTED);
    selected.push(node);
  }

  for (let i = 0; i < n; i++) canVisit(i);

  return selected.length >= n ? selected : [];
};

findOrder(8, [
  [1, 0],
  [2, 6],
  [1, 7],
  [6, 4],
  [7, 0],
  [0, 5],
]);
