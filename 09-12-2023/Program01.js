let name = "Alok Kumar";
let email = "alok@example.com";
let num1 = "4 ";
let num2 = "5";
console.log(typeof name);
console.log(typeof email);
console.log(num1 + num2); //45
console.log(10 + 5 + num1 + 8 + num2); //15485
console.log(2 + 3 + num1 * 2 + num2); //135
console.log(2 + 3 + num1 * 2 + 10 / 2); //
/*
   2+3+num1*2+10/2
   2+3+8+10/2
   2+3+8+5
   5+8+5
   13+5
   18
*/

//Display name in UpperCase
console.log(name.toUpperCase());

//Display name in LowerCase
console.log(name.toLowerCase());

//Concaenation
console.log("Hello" + " " + "World");
console.log("Hello".concat(" ", "World"));

//Convert array into string
arr = ["This ", "is ", " a ", "number ."];
console.log(arr);
console.log(arr.toString());

//Replace All a character from the other character
console.log("".concat(arr).replaceAll(",", "-"));

//Chain of method call
console.log("".concat(arr).replaceAll(",", "-").replaceAll(" ", ""));

// Convert a string into array

let myName = "Bibhu Ranjan Mohanty";

let myArr = myName.split(" ");

console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);

myArr = myName.split("");

console.log(myArr);

// Covert  word into number

let amount = "one two three four five six seven eight Nine";
let arrAmount = amount.split(" ");
let num = "";
for (let i = 0; i < arrAmount.length; i++) {
  switch (arrAmount[i].toLowerCase()) {
    case "zero":
      num += "0";
      break;
    case "one":
      num += "1";
      break;
    case "two":
      num += "2";
      break;
    case "three":
      num += "3";
      break;
    case "four":
      num += "4";
      break;
    case "five":
      num += "5";
      break;
    case "six":
      num += "6";
      break;
    case "seven":
      num += "7";
      break;
    case "eight":
      num += "8";
      break;
    case "nine":
      num += "9";
      break;
  }
}
console.log(num);
