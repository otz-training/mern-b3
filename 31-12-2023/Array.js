let arr = [];
console.log(arr);
console.log(typeof arr);

let arr1 = new Array();
console.log(arr1);
console.log(typeof arr1);

let arr2 = new Array(1, 2, 3, "A");
console.log(arr2);

let arr3 = [1, 2, 3, "A"];
console.log(arr3);

//Accessing Array Elements

let fruits = ["Apple", "Graphes", "Banana", "Pears"];

console.log(fruits);
console.log(fruits[0]); //Array Subscript
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log("length of fruits array is " + fruits.length);

// Use of Loop statement for accessing array elements

//1. For Loop
console.log("---Using Trditional For Loop------------");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//2. For of
console.log("----------Using For Of Loop---------------");
for (let item of fruits) {
  console.log(item);
}

//3. For In
console.log("----------Using For In Loop---------------");
for (let i in fruits) {
  console.log(i);
  console.log(fruits[i]);
}
//4. Foreach
console.log("----------Using For Each Loop---------------");

fruits.forEach(function (item) {
  console.log(item);
});
