function topKFrequent(arr, k) {
  let mem = {};
  let j = 0;
  let freqArray = [];

  if (arr.length === 1) {
    return arr[0];
  }

  for (let i = 0; i < arr.length; i++) {
    if (mem[arr[i]] !== undefined) {
      mem[arr[i]] += 1;
    } else {
      mem[arr[i]] = 0;
    }
  }

  for (const key in mem) {
    if (j <= k && mem[key] >= 1) {
      console.log(mem[key]);
      freqArray.push(mem[key]);
      j++;
    }
  }
  console.log(mem);
  return freqArray;
}

console.log(topKFrequent([1], 1));
