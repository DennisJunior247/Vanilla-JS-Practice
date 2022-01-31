// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charObj = {};
  let max = 0;
  let charStr = "";
  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  for (const val in charObj) {
    if (charObj[val] > max) {
      max = charObj[val];
      charStr = val;
    }
  }
  return charStr;
}

module.exports = maxChar;
