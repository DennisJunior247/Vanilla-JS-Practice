// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (const val of stringA.split()) {
    if (obj1[val]) {
      obj1[val] += 1;
    } else {
      obj1[val] = 0;
    }
  }

  for (const val of stringB.split()) {
    if (obj2[val]) {
      obj2[val] += 1;
    } else {
      obj2[val] = 0;
    }
  }

  for (const key in obj1) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
