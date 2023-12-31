## Array

- Example

  let n1 = 5;
  let n2 = 2;
  let n3 = 3;
  let n4 = 4;
  let n5 = 8;
  let r = n1 + n2 + n3 + n4 + n5 ;

  let arr = [5,2,3,4,8];
  let res = arr[0]+arr[1]+arr[2]+arr[3]+arr[4];

  let arr1 =['A',10,ture,undefined,null];

  Definition:

  Collection of items stored in contegious memory location.

  In Javascript array is an object.

  In Javascript array is indexed based .i.e index starts with 0

  Since Array is an Object ,it must have properties and methods.

  -> Declaration of Array :

  # Declaration of Empty Array :

  Way-1 : let arr = [] ; // (Using Literal)

  Way-2 : let arr1 = new Array();//Using Constructor Function

  # Decalring array with some initial value :

  Way-1 : let arr2 =[10,'A',true];

  way-2 : Let arr3 = new Array(10,20,30);

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

## Array Properties & Methods :

1. at()
2. concat()
3. Array()
4. copyWithin()
5. entries()
6. every()
7. fill()
8. filter()
9. find()
10. findIndex()
11. findLast()
12. findLastIndex()
13. flat()
14. flatMap()
15. forEach()
16. includes()
17. indexOf()
18. join()
19. keys()
20. lastIndexOf()
21. length
    :
    0
22. map()
23. pop()
24. push()
25. reduce()
26. reduceRight
27. reduceRight()
28. reverse()
    29 .shift()
29. slice()
30. some()
31. sort()
32. splice()
33. toLocaleString()
34. toReversed()
35. toSorted()
36. toSpliced()
37. toString()
38. unshift()
39. values()
40. with()
