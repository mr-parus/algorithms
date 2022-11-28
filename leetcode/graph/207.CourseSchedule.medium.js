// https://leetcode.com/problems/course-schedule/
// 207. Course Schedule
// #depth-first_search #breadth-first_search #graph #topological_sort
// #medium

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  for (const [a, b] of prerequisites) graph.set(a, (graph.get(a) || []).concat(b));

  const VISITED = 0;
  const SELECTED = 1;
  const status = new Map();

  function canVisit(node) {
    const nodeStatus = status.get(node);
    if (nodeStatus === VISITED) return false;
    if (nodeStatus === SELECTED) return true;
    status.set(node, VISITED);

    for (const child of graph.get(node) || []) {
      if (!canVisit(child)) return false;
    }

    status.set(node, SELECTED);
    return true;
  }

  for (let node of graph.keys()) {
    if (!canVisit(node)) return false;
  }

  return true;
};
