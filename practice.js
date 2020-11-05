// let array = ["john", "dupe", "ken", "ojie", "win"];
// let array1 = ["my", "name", "is", "john", "doe"];
// let array2 = ["for", "give"];
// let bothArrays = array
//   .concat(array, array1, array2)
//   .join()
//   .split("")
//   .sort()
//   .reverse()
//   .map((v, i, ar) => ar);
// console.log(bothArrays)

// --------------------------------------------------------------------------------------------------------
//WRITE AN ALGORITHM THAT REMOVES THE VOWELS FROM THE STRINGS
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

// METHOD 3/REGEX
// let removeVowels = text => {
//   return text.replace(/[aeiou]+/gi, "");
//  text.replace(/[^aeiou]+/gi, "")
// };
// console.log(removeVowels("abioutuedfgnvhdkj"));
// console.log("safsytawyaywua".split(/[aeiou]/).join(""));
// ------------------------------------------------------------------------------------------------------------

//Diff. btw native function and Arrow=> function Using the 'this' keyword
// const obj = {
//     name: 'Bka',
//     age: 19,
//     getDetails (){
//         //  let that = this;
//         setTimeout(()=>{
//            console.log(`i am ${this.name} and i'm ${this.age}`)
//         }, 1000)
//     }
// };
// console.log(obj.getDetails())

//WRTIE A PROGRAM THAT DOUBLES THE NUMBERS IN AN ARRAY
// let doubledNum = (numbers) => {
//   doubled = numbers.map(number => {
//   return number * 2;
// });
// return doubled;
// }
// console.log(doubledNum([1,2,3,4,5]))

//WRITE A FUNCTION THAT SHOWS ONLY THE NUMBER GREATER THAN ANY NUMBER SET IN AN ARRAY
// function numGreaterThan3(numbers, condition){
//  filtered = numbers.filter(number => {
//   return number > condition;
// })
// return filtered;
// }
// console.log(numGreaterThan3([2,4,6,1,1,3,5], 4))

// let FindIndex = numbers.findIndex(v => v === 4);
// let Find = numbers.find(v => v === "");
// console.log(double)
// console.log(filtered)
// console.log(Find);

// let str = "abcdef";
// let revas = str
//   .split("")
//   .reverse()
//   .join();
// console.log(revas)
// console.log(str);
// console.log(numbers.sort((a,b)=>{
//     return a-b
// })
// METHOD 1// MET// METHOD 1
// removeV = str => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let hi = str.split("").filter(items => !vowels.includes(items));
//   console.log(hi.join());
// };
// removeV("aeiouqwerty");HOD 1
// removeV = str => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let hi = str.split("").filter(items => !vowels.includes(items));
//   console.log(hi.join());
// };
// removeV("aeiouqwerty");
// removeV = str => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let hi = str.split("").filter(items => !vowels.includes(items));
//   console.log(hi.join());
// };
// removeV("aeiouqwerty");
// rest
//reduce methods helps to add up numbers
// numbers.reduce// METHOD 1
// removeV = str => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let hi = str.split("").filter(items => !vowels.includes(items));
//   console.log(hi.join());
// };
// removeV("aeiouqwerty");((acc))

//USING REST AND SPREAD WITH ARRAYS AND OBJECT
// let a = "abcde123fghlm";
// let b = [...a];
// c = a.split([""]);
// console.log(b)
// console.log(c);

// let oldObj1 ={
//   name: 'JOHN DOE',
//   age: 30
// };
// let oldObj2 = {
//   name: "MArk",
//   age: 40
// };
// let newObj = { ...oldObj1, ...oldObj2};
// console.log(newObj)

// -----------------CLASS CONTRUCTOR AND INHERITANCE-------------------------------------------------------------------
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age
//   }
//   hello() {
//     return `Hello i am ${this.name} and i'm ${this.age}yrs Old`
//   }
// }

// const Kay = new Person('John',23)
// const Kayo = new Person('Kayode',26)
// console.log(Kay.hello(), Kayo.hello())
// console.log(Kay,Kayo);
// ------------------------------------------------------------------------------------------------

//CREATE A FUNCTION THAT ACCEPTS AN ARRAY AND RETURN THE LAST ITEM IN THE ARRAY
// using reverse/find method
// lastItem = arra => arra.reverse().find(v => v);
// //using for in loop
// lastItem2 = arra =>{
//   for(let v in arra){
//    ae = arra[v]
// }
// console.log(ae)//consoleloging this outside the for loop is the logic for getting the last item. if inside it get the whole items
// }
// console.log(
// lastItem2(["john", 2, 3, 4, 5, 6, 7, 8, { name: "john" }, { age: 12 }])
// );

// write A FUNCTION THAT COUNT THE NUMBER OF VOWELS IN THE INPUT
// removeV = str => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let hi = str
//     .split("")
//     .filter(items => !vowels.includes(items))
//     .join("");
//   let n = str.length - hi.length;
//   // console.log(`${n} vowels removed`);
// };
// removeV("aeiouqwertyggaggegggilou");

// let myArr = () => {
//   let arr = [4, 2, 5, 3];
//   let arr1 = [arr.splice(0, 2), arr];
// let [first, second, ...others] = arr;
// let arr2 = [[first, second], others];
// let arr3 = arr1.flatMap(item => item.sort((a, b) => a - b));
// console.log(arr3);
// };
// myArr();

// arr1 = [1, [2, 5], 4, ["fdfdf", [2, 4, 6]]];
// console.log(arr1.flat());

// --------------------------------------------------------------
// multiplying calculator
// calc = a => a.reduce((acc, v) => acc * v);
// console.log(calc([1,2,3,4,5,6,7,8,9]))
// ----------------------------------------------------------------

// let dArray = ["john", 2, 3, 4, 5, 6, 7, 8, { name: "john" }, { age: 12 }];
// let ne = dArray.length -5.
// let d = dArray.splice(ne)
// console.log(d)

// ---------------------------------------------------------------------------
//FIND AN ITEM IN AN ARRAY USING THE FIRST AND LAST CHAR
// let arrayOfStr = ["i", "work", "in", "learn", "factory", "walk", "WARK"];
// let conditional = arrayOfStr
//   .filter(v => v.toLowerCase().match(/^w/ && /k$/))
//   .join();
// console.log(conditional);

//CREATE FUNCTOIN THAT RETURNS THE FACTORIAL OF A NUMBER

// getFactirial = num => {
//   multiplier = 1;
//   for (i = num; i >= 1; i--) {
//     multiplier *= i;
//     // console.log(multiplier);
//   }
// };
// getFactirial(4);

// let ar = [0, 1, 2, 3, 4, 5, 7, { name: "john" }];
// for (let v in ar) {
//   ae = ar[v];
//addind this console insise the for loop will print all the values in the array
//  console.log(ae);
// }
//having the console outside of the for loop will fetch the last item in the array
// console.log(ae);

//WRITE A JAVASCRIPT PROGRAM THAT COMPARE THE PROPERTY VALUES OF AN OBJECT{ if thesame return true else false}
// obj1 = {
//   name: "John Doe",
//   age: 12
// };
// obj2 = {
//   name: "Man",
//   age: 12
// };
// for (let v in obj1) {
//   if (obj1[v] === obj2[v]) {
//     console.log('YES')
//     return false;
//   } else {
//     console.log('No')
//     return false;
//   }
// }

//WRITE A FUNCTION THAT RETURNS OBJECT VALUES IF THE KEY IS SPECIFIED. INCLUDING NESTED OBJECTS
// obj4 = {
//   level1: {
//     level2: {
//       level3: "John Doe"
//     }
//   },
//   age: 12,
//   job: "programmer"
// };
// ----------------------------
// function hasKey(obj, key) {
//   return obj != null && hasOwnProperty.call(obj, key);
// }
// console.log(hasKey(obj1, "name"));

// --------------------------------------------------------
// Object.keys(obj4).forEach(key => {
//   console.log(key, ':', obj4[key])
// });

// -------------ACCURATE-------------------------------------
// function nestedObj(obj,key){
//   for(let values in obj){
//     if(values.includes(key)){
//       console.log('Found:')
//       return obj[values];
//     }
//     else if(typeof obj[values] == 'object'){
//       return nestedObj(obj[values], key)
//     }else{ console.log('No such Key')}
//   }

// }
// console.log(nestedObj(obj4, "level3",));
// console.log(nestedObj(obj4, 'level6'))

// function sevenBoom(arr) {
//   filtered = arr.filter(values => {
//     if (values.includes(7)) {
//      console.log('Boom')
//     }
//   });
// }

//WRITE A ()=>{} THAT CHECKS AN ARRAY FOR A NUMBER AND FETCH THE NUMBER OUT EVEN IF ITS ATTACHED TO ANOTHER NUMBER. E.G[4,6,7, 79,] GET ONLY 9
// let getSingleNumber = (arr, value) =>{
//   let stringified = arr.toString().split("").filter(v =>{
//     if(v.includes(value)){
//       return true;
//     }
//   })
//  console.log(parseInt(stringified))
// };
// getSingleNumber([1, 3, 7, 5, 6, 87, 594], 3);

// let getSingleNumber = (arr, value) =>{
//    valueToString = value.toString().split('')
//   stringified = arr.toString().split('')
//     for(let va in valueToString){
//   for(let va in valueToString){
//     console.log(stringified == valueToString[va] )
//   }}
//   //  console.log(stringified)
//   // console.log(valueToString)
// //  console.log(parseInt(stringified))
// };
// getSingleNumber([1,3,4,6,87,5944],44);

// obj = {
//     name:{
//         name1: 'pepsi',
//         name2: {
//             name2i: 'final'
//         }
//     }
// }

// function getKeyByVal(obj, key){
//     for(let v in obj){
//         if(v.includes(key)){
//             return
//         }else if(typeof v == 'object'){

//         }
//     }
// }

//WRITE A FUNCTION THAT REVERSE A WORD
// reverseWord = (word) => {
// for (i = word.length - 1; i >= 0; i--) {
//   console.log(word[i]);
// }
// }
// reverseWord("mfon");

//MTETHOD 2 after looping 2ru the values, we store the values into reversed on after the other whle reversed is holdong the
// const reversed = word => {
//   reversed = "";
//   for (v of word) {
//     reversed = v + reversed;
//   }
//   console.log(reversed);
// };
// reversed('i am a programmer and i know so')

// METHOD 3 USING REDUCE
// function reverseed(str){
//   return str.split('').reduce(char, value => { value + char})
// }
// reverseed()

//WRITE A FUNCTION THAT REVERSE AN INTERGER
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

//WRITE A PROGRAM THAT CAPITALIZE FIRST LETTER OF EACH WORD
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

// ***********************************************************************************************************
// ARRAY/OBJECT METHODS WITH EZEKIEL 28/02/20' / 09:40AM
// const users = [
//   {
//     fname: "John",
//     lname: "Doe",
//     age: 12,
//     siblings: ["Jide", "John", "Ojo"],
//     state: "Abia",
//     drive: null
//   },

//   {
//     fname: "Mike",
//     lname: "Duke",
//     age: 32,
//     siblings: ["Tunde", "Dada", "Bode"],
//     state: "Ekiti",
//     drive: null
//   },

//   {
//     fname: "Learn",
//     lname: "Factory",
//     age: 17,
//     siblings: ["Umuaiah"],
//     state: "Abia",
//     drive: null
//   }
// ];

//ACCESSING THE ARRAY
//  USING TRADITIONAL FOR LOOP
// for (i=0; i < users.length; i++){
//   console.log(users[i])
// }

// USING FOR EACH
// users.forEach( user =>{
//     console.log(users);
// })

// USING FILTER (getting some data from the original data base on some condition)
// user18above = users.filter( user =>{
//     return user.age >= 20
// })
// console.log(user18above)

// USING MAP concat the fname and lame with kayode and age * 2
// newUser = users.map( v => {
//   //  console.log( v.fname +" "+'Kayode', v.age * 2 )
//    v.fullname = ` ${v.fname} ${v.lname} Kayode;`
//    v.age = v.age * 2;

//     return v
// })
//  console.log(newUser);

// // USING DESTRUCTURING
// newUser = users.map(user => {
//   const { fname, age, ...others } = user;
//   return {
//     fname: fname.concat(" " + "Kayode"),
//     age: age * 2,
//     ...others
//   };
// });
// console.log(newUser);

// USING IF STATEMENT, CHECK IF AGE>16 THEN users.drive = yes else no
// if (users.age > 16) {
//   users.drive = "Yes";
// } else {
//   users.drive = "No";
// }
// USING TERNARY OPERATOR, CHECK IF AGE>16 THEN users.drive = yes else no
// users.age > 16 ? (users.drive = "Yes") : (users.drive = "No");

// DESTRUCTURING OBJECT
// const { fname, lname, age } = users;

// DESTRUCTURING OBJECT DATAS AND RENAMING KEYS WHERE KEYS HAVE COMMON NAME from another object
// users2 = {
//   fname,
//   lname,
// }
// const { fname: fname1, lname: lname1, age } = users2;

// DESTRUCTURING ARRAY the variable[ name, age, data] are used to hold the values at the index where they sit
// let ArrayV = ['Ada', 24, [1,2,3]]
// const [name,age, data ] = ArrayV
// console.log(name, age, data)

// CREATING AN OBJECT OUT OF OLD OBJECT WITH ADDITIONAL VALUES
// const obj={
//   name: 'winber',
//   age: 24
// }
// const newObj={
//   id: Math.random().toFixed(),//I USED THIS TO GENERATE RANDOM ID
//   ...obj
// }
// console.log(obj, newObj)

// USING DEFAULT PARAMETERS john doe 24 is set at default if no argument comes in.
// const defaultParams = (name='John Doe', age=24) =>{
//   return `${name}: ${age}`
// }
// console.log(defaultParams()) //WITHOUT ARG
// console.log(defaultParams('Mike', 30)); //WITH ARG

// USING ARGS OR ARGUMENT: with this we can create a function without setting parameters
// const args = function(){
//   // console.log(arguments)
//   const val = Array.from(arguments) //this converts the argument into a true ARRAY poured into val
//   return val
// }
// // args(1,2,3,4,5)
// console.log(args(1,2,3,4,5))

//FOR OR LOOP
// const arr = ['hello',2,3,4,5,'book']
// //this prints the values
// for (let val of arr){
//   console.log(val)
// }
// //this prints the index
// for (let val in arr){
//     console.log(val);
// }

// Async and Await/ Promise
// const getPost = () =>{
//    fetch('twitterApiUrl')
//    .then(res => res.json)
//    .then(data => {
//      console.log(data)
//    })
// }

// const getPost = () =>{

// }

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

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  ARRAYS

//    const array =[1,2,3,4,5]
// a firstvalue
//  let result1 = array[0]
//  let result2= array.splice(1)
//  console.log(result)

// b lastvalue
// const lastvalue = (arr)=>{
//     // let length = arr.length - 1
//     // return arr[length]
//    let res= arr.reduce((acc,int,index)=>{
//         return  index
//     })
//     console.log(res)
// }
// console.log(lastvalue([1,2,3,4,5] ))

// c sum
//   const sum = (arr)=>{
//   let count= 0
//   for( let i of arr){
//    count= count + i
//   }
//   console.log(count)

//  using reduce
//  let add= arr.reduce((a,b,c)=>{
//      return c
//  })
//  console.log(add)
//   }
//  sum(array)

// d indexvalue
// const index= (arr)=>{

//       for( let i in arr){
//        console.log(i)
//       }

//       let res = arr.map((v,i)=>i)
//           console.log(res)
//   }
// index(array)

// c chuckstargetlength

//   2 const arry = []

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

// var str = "How are you doing today ?";
// var res = str.split("");
// console.log(res.slice(0,3).join().toString())

// const months = ["Jan", "March", "April", "June"];
// console.log(months.splice(1, 0, "Feb"))

// harmless ransom note //

//  combination algorithm//
// const permutation = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i] + array[j]);
//     }
//   }
// };

// permutation(["a", "b", "c","e","w","u"]);

// let color = "#" + Math.floor(Math.random() * 16777215).toString(16)

// const eas = [1,2, 3,6]
// for(val of eas){
//     console.log(val)
// }

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