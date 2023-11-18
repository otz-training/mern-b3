/*
    Comparision Operator / Relational Operator:

    - It compares two operand ,if they satisfy then it will return true else return false.

    - There are following type of comparision operators:

      <
      <=
      >
      >=
      ==
      ===
      !=
      !==

    - let res = 4<5;
*/

let res = 4 < 5;
console.log(res);

res = 4 > 5;
console.log(res);

console.log("4" == "4"); //true
console.log("4" == 4); //true
console.log(4 == 4); //true

console.log("4" === "4"); //true
console.log("4" === 4); //false
console.log(4 === 4); //true

let x = 5 !== 5;
console.log(x);

x = 5 !== "5";
console.log(x);
