function quickSort(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[j]) {
      let temp;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

console.log(quickSort([3, 4, 1, 5]));
