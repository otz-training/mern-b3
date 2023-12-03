// function printLine() {
//   let str = "";
//   for (let i = 0; i <= 100; i++) {
//     str += "#";
//   }
//   console.log(str);
// }
// printLine();
// console.log("JAVASCRIPT TUTOTIAL");
// printLine();

// function printVal(val) {
//   console.log("val=" + val);
// }

// printVal(5);
// printVal("Welcome");

function PI() {
  return 3.141;
}
// find area of circle whose radius r is 5
// let r = 5;
// let area = PI() * r * r;
// console.log(`${PI()}*${r}*${r}=${area}`);

function fact(num) {
  let f = 1;
  while (num != 0) {
    f = f * num;
    num--;
  }
  return f;
}

let x = fact(7);
console.log(x);
