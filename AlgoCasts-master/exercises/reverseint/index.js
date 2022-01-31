// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  let rev = "";
  const numToStr = num.toString();
  for (const el of numToStr) {
    rev = el + rev;
  }
  return parseInt(rev) * Math.sign(num);
}

module.exports = reverseInt;
