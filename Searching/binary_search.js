function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor(start + end / 2);
    if (arr[middle] === num) {
      return middle;
    } else if (num > arr[middle]) {
      start = middle;
    } else if (num < arr[middle]) {
      end = middle;
    } else {
      return -1;
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
