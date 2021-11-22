function merge(arr: number[][]): number[][] {
  arr = arr.sort(([a], [b]) => a - b);

  for (let i = 0; i < arr.length - 2;) {
    if (arr[i][1] >= arr[i + 1][0]) {
      arr[i][1] = Math.max(arr[i + 1][1], arr[i][1]);
      arr.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return arr;
}
