//function definition
function arithmatic(num1, num2, op) {
  if (op === "+") {
    //console.log(num1 + num2);
    //String concatination
    //console.log(num1 + "+" + num2 + "=" + (num1 + num2));
    //Template Literal
    console.log(`${num1}+${num2}=${num1 + num2}`);
  } else if (op === "-") {
    //console.log(num1 - num2);
    //console.log(num1 + "-" + num2 + "=" + (num1 - num2));
    console.log(`${num1}-${num2}=${num1 - num2}`);
  } else if (op === "*") {
    //console.log(num1 * num2);
    //console.log(num1 + "*" + num2 + "=" + num1 * num2);
    console.log(`${num1}*${num2}=${num1 * num2}`);
  } else if (op === "/") {
    //console.log(num1 / num2);
    //console.log(num1 + "/" + num2 + "=" + num1 / num2);
    console.log(`${num1}/${num2}=${num1 / num2}`);
  } else if (op === "%") {
    //console.log(num1 % num2);
    //console.log(num1 + "%" + num2 + "=" + (num1 % num2));
    console.log(`${num1}%${num2}=${num1 % num2}`);
  }
}

//function call
arithmatic(34, 45, "+");
arithmatic(34, 45, "-");
arithmatic(34, 45, "*");
arithmatic(34, 45, "/");
arithmatic(34, 45, "%");

str =
  "This \
is\
a \
string";
console.log(str);

str = `This \
is\
a \
string`;
console.log(str);

str = `This 
is
a 
string`;
console.log(str);
