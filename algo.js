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
// let x = {};
// console.log(Object.getPrototypeOf(x));
// // console.log(x.__proto__);
// class Den {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi(){
//       return `Hi ${this.name}`;
//   }
// }

// class Me extends Den {
//   constructor(skill, name) {
//     super(name);
//     this.skill = skill;
//   }
//   getSkill() {
//     return `${this.skill}${this.name}  hahaha`;
//   }
// }

// let jc = new Me("friend","dennis");
// console.log(jc.Skill());


num = [1,2,3,5,6]
 let array =num.slice(0,3)
console.log(array)
console.log(num);