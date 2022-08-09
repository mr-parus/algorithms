function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor(left + (right - left) / 2);
        const guess = arr[middle];

        if (guess === x) return middle;
 
        guess > x
            ? right = middle - 1
            : left = middle + 1;
    }
    
    return null;
}

// Usage

const assert = require('assert');
assert.equal(binarySearch([1, 3, 5, 7, 9], 3), 1);
assert.equal(binarySearch([1, 3, 5, 7, 9], -3), null);
