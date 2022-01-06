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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FIzz buzz algo <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

// function fizzbuzz(num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 15 === 0)  console.log("fizzbuzz");
//     else if (i % 3 === 0) console.log("buzz");
//     else if (i % 5 === 0) console.log("buzz");
//     else console.log(i)

//   }
// }

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

// ===================================== reverse word algo =========================================== 22/02/21//

// function reverseWord(str) {
//   const reverseWordArray = [];
//   const word = str.split(" ");

//   word.forEach((e) => {
//     let reverseWord = " ";
//     for (let i = e.length - 1; i >= 0; i--) {
//       reverseWord += word[i];
//     }
//     reverseWordArray.push(reverseWord);
//   });
// }

// function foo(i) {
//   if (i < 0) return;
//   console.log("begin: " + i);
//   foo(i - 1);
//   console.log("end: " + i);
// }
// foo(3);
