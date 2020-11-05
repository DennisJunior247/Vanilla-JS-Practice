// class person{
// constructor(name="dennis", age= 50){
//     this.name = name
//     this.age= age

// }
// }


// class anotherperson extends person{
//     constructor(sch ="uni", name,age){
//         super(name,age);
//         this.sch=sch
//     }
// }

// const anotherperson2 = new anotherperson("unn","john", 10)
// console.log(anotherperson2)

// class Person {
//     constructor(name = 'Anonymous', age = 0) {
//       this.name = name;
//       this.age = age;
//     }
//     getGreeting() {
//       return `Hi. I am ${this.name}!`;
//     }
//     getDescription() {
//       return `${this.name} is ${this.age} year(s) old.`;
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, major) {
//       super(name, age);
//       this.major = major;
//     }
//     hasMajor() {
//       return !!this.major;
//     }
//     getDescription() {
//       let description = super.getDescription();
  
//       if (this.hasMajor()) {
//         description += ` Their major is ${this.major}.`;
//       }
  
//       return description;
//     }
//   }
  
//   class Traveler extends Person {
//     constructor(name, age, homeLocation) {
//       super(name, age);
//       this.homeLocation = homeLocation;
//     }
//     getGreeting() {
//       let greeting = super.getGreeting();
  
//       if (this.homeLocation) {
//         greeting += ` I am visiting from ${this.homeLocation}.`;
//       }
  
//       return greeting;
//     }
//   }
  
//   const me = new Traveler(undefined,26, 'Philadelphia');
//   console.log(me.getGreeting());
  
//   const other = new Traveler(undefined, undefined, 'Nowhere');
//   console.log(other.getGreeting());

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, 90, 1];

console.log( Math.min.Math.floor(...arr1, ...arr2) ); // 8