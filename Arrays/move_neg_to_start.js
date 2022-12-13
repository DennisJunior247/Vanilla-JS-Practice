function NegToStart(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  return arr;
}

console.log(NegToStart([-12, 11, -13, 5]));
