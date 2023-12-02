let num = 12;
let c = [];
while (num != 1 && c[num] !== true) {
  let sum = 0;
  c[num] = true;
  while (num > 0) {
    r = num % 10;
    sum = sum + r * r;
    num = (num - r) / 10;
  }
  num = sum;
}
if (num == 1) {
  console.log("It is a happy Number");
} else {
  console.log("It is  a sad number");
}
