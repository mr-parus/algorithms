function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  return merge(mergeSort(arr.splice(0, arr.length / 2)), mergeSort(arr));
}

function merge(left: number[], right: number[]): number[] {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

console.log(mergeSort([1, 3, 4, 5, 366, 0, 1, 45]));
