// --------------------------------------------------------------------------------------------------------
// WRITE AN ALGORITHM THAT REMOVES THE VOWELS FROM THE STRINGS
// METHOD 1/SPLIT
// removeV = str => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let hi = str.split("").filter(items => !vowels.includes(items));
//   console.log(hi.join());
// };
// removeV("aeiouqwerty");

// METHOD 2/SPREAD
// removeV = str => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   result = [...str].filter(items => !vowels.includes(items)).join();
//   console.log(result);
// };
// removeV("aeiouqwerty");

// write A FUNCTION THAT COUNT THE NUMBER OF VOWELS IN THE INPUT
// removeV = str => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let hi = str
//     .split("")
//     .filter(items => !vowels.includes(items))
//     .join("");
//   let n = str.length - hi.length;
//   console.log(`${n} vowels `);
// };
// removeV("dennis");

// WRITE A ()=>{} THAT CHECKS AN ARRAY FOR A NUMBER AND FETCH THE NUMBER OUT EVEN IF ITS ATTACHED TO ANOTHER NUMBER. E.G[4,6,7, 79,] GET ONLY 9
// let getSingleNumber = (arr, value) =>{
//   let stringified = arr.toString().split("").filter(v =>{
//     if(v.includes(value)){
//       return true;
//     }
//   })
//  console.log(parseInt(stringified))
// };
// getSingleNumber([1, 3, 7, 5, 6, 87, 594], 3);

// WRITE A FUNCTION THAT REVERSE A WORD
// reverseWord = (word) => {
// for (i = word.length - 1; i >= 0; i--) {
//   console.log(word[i]);
// }
// }
// reverseWord("mfon");

// MTETHOD 2 after looping 2ru the values, we store the values into reversed on after the other whle reversed is holdong the
// const reversed = word => {
//   reversed = "";
//   for (v of word) {
//     reversed = v + reversed;
//   }
//   console.log(reversed);
// };
// reversed('i am a programmer and i know so')

// WRITE A FUNCTION THAT REVERSE AN INTERGER
// reverseInt = int => {
//     inti = int.toString().split('').reverse().join('')
//    return parseInt(inti) * Math.sign(int);
//   }
// console.log(reverseInt(-12345));

// METHOD 2
// function reverseInti(int){
//   const reversed = int.toString().split('').reverse().join('')
//   if(int < 0){
//    return parseInt(reversed) * -1
//   }
//    return parseInt(reversed)
//     //OR
//   // return Number(reversed)
// }
// reverseInti()

// WRITE A PROGRAM THAT CAPITALIZE FIRST LETTER OF EACH WORD
// let Word = 'i am a programmer and i know so'
// toUpperCaze1 = Word.split(" ").map(v => v.toUpperCase().match(/\b(\w)/g) + v.slice(1)).join(' ');
// toUpperCaze2 = Word.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(' ');
//    toUpperCaze3 = Word.split(" ").map(v => v[0].toUpperCase() + v.substring(1)).join(' ')
//    toUpperCaze4 = Word.toUpperCase().split(" ").map(v => v[0].concat(v.substring(1).toLowerCase())).join(' ')
//  console.log(toUpperCaze3)

// CHUNKED ARRAY
// function chunked(arr, size){
//   let chunk = []
//   for (let element of arr){
//     const lastindex = chunk[chunk.length-1]
//     if(!lastindex || lastindex.length === size){
//     chunk.push([element])
//     }
//     else{
//        lastindex.push(element)}
//   }
//   return chunk;

// }
// console.log(chunked([1,2,3,4,5,6,7], 2))

// **************************************************************************************
// 1. given a string ,retrun Character that appears the most

// 2. given a string of words , count number of vowels

// let vowel = ["a","e","i","o","u"]
// let word='helloeaivd'
//  let result = word.toLowerCase().split('').filter((word)=>{
// return vowel.includes(word)
// })
// console.log(result.length)

// 3. find the largest and smallest number in an unsorted array of intergers

// let a = [2,3,4,5,111]
// let lag =([Math.max(...a),Math.min(...a)])
// console.log(lag)

// 4. given an array of number, return the dulicate number with out using set
// a = [1,1,2,3,4,5,5,6]
// let dup = a.filter((v,i)=>{
//   return a.indexOf(v)===i
// })
// console.log(dup)

// sep 7th 2020 fizz buzz alogorithm//

// const fizzBuzz = (num)=>{
//     for(let i=0; i<= num;i++){
//       if(i%15===0) console.log("fizzBuzz")
//       else if (i%3===0) console.log("buzz")
//       else if (i%5===0)console.log("buzz")
//       else console.log(i)
//     }
// }

// fizzBuzz(20)

// removing duplicate word from a string

// const word = "dennis";
// let arr = word.split("");
// for (let i = 0; i <= arr.length; i++) {
//   for (let w = i + 1; w <= arr.length; w++) {
//     if (arr[w] == arr[i]) {
//       arr.splice(w,1).join();
//     }
//     console.log(arr);
//   }
// }

// const nap =[1,1,1,2,3]
// const see = new Set(nap)
// console.log(see)

// find th longesrt word in string

//  function longestWord(words){
//   const longestWordd = words.split(" ").map((word) => word.length)
//    return Math.max(...longestWordd)
//  }
//   function longestWord(words) {
//     const longestWordd = words.split(" ").sort((a,b) => (b.length-a.length));
//     return longestWordd[0].length;
//   }

//   function findLongestWord(str) {
//     const longestWord = str.split(" ").sort(function (a, b) {
//       return b.length - a.length;
//     });
//     return longestWord[0].length;
//   }
//  console.log(longestWord("come to school"));

// remove duplicate from an array
// function duplicate(dup){
//  let duplicate =dup.filter((c,index)=>{
// return dup.indexOf(c)===index
// })
// console.log(duplicate)
// }
// duplicate(["react","java","react","native"])

// // fibonacii

// // function fibonaci(index,cache) {
// //     cache= cache || []
// //     if (cache[index]) return cache[index]
// //     else{
// //         if(index<3) return 1;
// //         else{
// //             cache[index] =
// //               fibonaci(index - 1, cache) + fibonaci(index - 2, cache);
// //         }
// //     }
// //  console.log( cache[index])
// // }
// // fibonaci(12)

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<HaemlessRanmsoneNote>>>>>>>>>>>>>>>>>>>>>>>>>> 31/01/21

// function harmlessRansomNote(note, mag) {
//   const noteArr = note.split(" ");
//   const magArr = mag.split(" ");

//   const magObj = {};

//   magArr.forEach((word) => {
//     if (!magObj[word]) magObj[word] = 0;
//     magObj[word]++;
//   });

//   let NoteIsPosssible = true;

//   noteArr.forEach((word) => {
//     if (magObj[word]) {
//       magObj[word]--;
//       if (magObj[word] < 0) NoteIsPosssible = false;
//     } else {
//       NoteIsPosssible = false;
//     }
//   });
//   console.log(NoteIsPosssible);
// }

// harmlessRansomNote("dennis a boy qqq", "dennis is a good boy ");

// <<<<<<<<<<<<<<<<<<<<<<< Palindrome >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 08/02/21

// function isPalindrome(string) {
//   let pali = string.toLowerCase().split(" ");
//   let Char = "abcdefghijklmnopqrstuvwxyz";
//   let valiChar = Char.split(" ");

//   const letterArr = [];

//   for (let char of pali) {
//     valiChar.indexOf(char) > -1;
//     letterArr.push(char);
//   }

//   if (letterArr.join("") === letterArr.reverse().join("")) console.log(true);
//   else {
//     console.log(false);
//   }
// }

// isPalindrome("ada");

function sort(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

console.log(sort([0,2,1]))