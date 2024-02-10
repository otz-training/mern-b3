//Spread and Rest Operators

let arr = [10, 20, 30];

let arr2 = [...arr, 50, 60];

console.log(arr);
console.log(arr2);

function test(a, c, ...args) {
  return args;
}

let res = test(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(res);

let name = "Rahul";
console.log(name);
console.log([...name]);

// function sum(...args) {
//   console.log("Number of arguments:" + args.length);
//   let s = 0;
//   for (let i = 0; i < args.length; i++) {
//     s = s + args[i];
//   }
//   return s;
// }

// function sum(...args) {
//   console.log("Number of arguments:" + args.length);
//   return args.reduce(function (prev, curr) {
//     return prev + curr;
//   }, 0);
// }

// console.log(sum(4));
// console.log(sum(4, 3));
// console.log(sum(4, 5, 9));
// console.log(sum(4, 8, 10, 12));
// console.log(sum(4, 8, 10, 12, 20));
// console.log(sum(4, 8, 10, 12, 20, 30));
// console.log(sum(4, 8, 10, 12, 20, 40, 50));

// let arr1 = [1, 2, 3, 5, 6, 7, 8, 9];

// let evenSum = arr1.reduce(function (prev, curr) {
//   return curr % 2 == 0 ? prev + curr : prev;
// }, 0);

// console.log(evenSum);

// let oddSum = arr1.reduce(function (prev, curr) {
//   return curr % 2 != 0 ? prev + curr : prev;
// }, 0);

// console.log(oddSum);

let arr3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// //find sum of prime numbers after trippling each number in the array.

// // map()
// // filter()
// // reduce()

// let arr4 = arr3.map(function (num) {
//   return num * 3;
// });

// console.log(arr3);
// console.log(arr4);

// let arr5 = arr3.filter(function (num) {
//   return isPrime(num);
// });

let isPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

// console.log(arr5);

// let arr6 = arr5.reduce(function (p, c) {
//   return p + c;
// }, 0);
// console.log(arr6);

// let finalResult = arr3
//   .map(function (e) {
//     return e * 3;
//   })
//   .filter(function (num) {
//     return isPrime(num);
//   })
//   .reduce(function (p, c) {
//     return p + c;
//   }, 0);
// console.log(finalResult);

let finalResult1 = arr3
  .map((e) => e * 3)
  .filter((num) => isPrime(num))
  .reduce((p, c) => p + c, 0);
console.log(finalResult1);

const names = ["Rahul", "Pragati", "Rashmi", "Ranjan", "Rinku", "Ajit"];
const namerWithR = names.filter((name) =>
  name.charAt(0).toLowerCase() != "r" ? true : false
);
console.log(namerWithR);

const fullnames = names.map((name) => name.concat(" ", "Kumar"));
console.log(fullnames);
