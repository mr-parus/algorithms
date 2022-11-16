// https://leetcode.com/problems/daily-temperatures/description/
// 739. Daily Temperatures
// #array #stack #monotonic_stack #traversing_from_right
// #medium

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const answer = [];

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length && temperatures[stack.at(-1)] <= temperatures[i]) {
            stack.pop();
        }

        answer.unshift(stack.length?stack.at(-1) - i:0);
        stack.push(i);
    }

    return answer;
};
