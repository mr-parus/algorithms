function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  let i = 0;
  let pivotIndex = arr.length - 1;

  const pivot = arr[pivotIndex];

  while (i < pivotIndex) {
    if (arr[i] > pivot) {
      arr[pivotIndex] = arr[i];
      arr[i] = arr[pivotIndex - 1];
      arr[pivotIndex - 1] = pivot;

      i = 0;
      pivotIndex--;
      continue;
    }

    i++;
  }

  return [...quickSort(arr.slice(0, pivotIndex)), pivot, ...quickSort(arr.slice(pivotIndex + 1))];
}

console.log(quickSort([2, 1, 111, 3, 0, 444, 1, 2, 3, 555, 777]));
