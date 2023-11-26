//function definition
function arithmatic(num1, num2, op) {
  let str = "";
  switch (op) {
    case "+":
      str = `${num1}+${num2}=${num1 + num2}`;
      break;
    case "-":
      str = `${num1}-${num2}=${num1 - num2}`;
      break;
    case "*":
      str = `${num1}*${num2}=${num1 * num2}`;
      break;
    case "/":
      str = `${num1}/${num2}=${num1 / num2}`;
      break;
    case "%":
      str = `${num1}%${num2}=${num1 % num2}`;
      break;
    default:
      str = "Invalid operation";
  }
  return str;
}

//function call
let res = arithmatic(34, 45, "+");
console.log(res);
console.log(arithmatic(34, 45, "-"));
console.log(arithmatic(34, 45, "*"));
console.log(arithmatic(34, 45, "/"));
console.log(arithmatic(34, 45, "%"));
