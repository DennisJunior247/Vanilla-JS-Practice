function cyclically_rotate(arr, k) {
  let n = arr.length - 1;
  let temp = arr[n];

  for (let i = n; i > 0; i--) {
    arr[i] = arr[i - 1];
    console.log(arr[i]);
  }
  arr[0] = temp;
  return arr;
}

console.log(cyclically_rotate([1, 2, 3, 4, 5], 2));
