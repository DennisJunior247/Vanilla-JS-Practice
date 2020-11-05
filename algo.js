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

// function Hero(name, school) {
//   this.name = name;
//   this.school = school;
// }

// Hero.prototype.mad = function () {
//   return `${this.name} hi dennis`;
// };

// function Warrior(){
//     Hero.call(this,name)
//     this.name=name
// }



// let User = new Hero("dennis");
// console.log(User.mad());

// class Den {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi(){
//       return `Hi ${this.name}`;
//   }
// }
// let DD= new Den("friend")
// console.log(DD.sayHi())

let x = {};
console.log(Object.getPrototypeOf(x))
console.log(x.__proto__)