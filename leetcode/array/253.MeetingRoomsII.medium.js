// #todo

function minMeetingRooms(intervals) {
  intervals = intervals.sort(([a], [b]) => a - b);
  let maxCount = 1;
  let currentCount = 1;
  let currentWindowI = 0;
  let nextWindowI = 0;

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    if (start < intervals[currentWindowI][1]) {
      currentCount++;
      if (end > intervals[nextWindowI][1]) {
        nextWindowI = i;
      }
    } else {
      currentWindowI = nextWindowI;
      currentCount = i - nextWindowI;
    }

    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
}

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);
