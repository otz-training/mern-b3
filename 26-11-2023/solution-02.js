//Find the largest of two number

function largest(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log("largest between 20 and 25 is " + largest(20, 25));

console.log("largest between 27 and 25 is " + largest(27, 25));
