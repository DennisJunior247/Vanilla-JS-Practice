function minMax(arr) {
  let min = 0;
  let max = 0;

  if (arr.length === 1) {
    return false;
  }

  if (arr.length > 2 && arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else if (arr.length > 2 && arr[0] < arr[1]) {
    max = arr[1];
    min = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min + max;
}

console.log(minMax([1, 3, 4, 1]));
