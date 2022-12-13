function KthSmallestValue(arr, K) {
  //   let smallest;
  if (arr.length < k) {
    return;
  }
  const sorted = arr.sort((a, b) => a - b);
  return sorted[k - 1];
}
