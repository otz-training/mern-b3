# Function in Javascript

- Functions are the first class citizen in Javascript.

- Definition Of Function :

  It is a self defined block which performs a predefined task.

  for example : Math.pow() get the power of a number.

- Adavantages of Function:

  - Modularity

  - Reusability

  - Reduce codebase

  - Easy to Debug

  - Reduce the complexity of the program

  Example:

  let num1 =5;
  let num2 =4;
  console.log(num1+num2);
  console.log(num1-num2);
  console.log(num1\*num2);
  console.log(num1/num2);
  console.log(45+60);

  ## Example of Modularity and Reusability :

  let num1 = 5;
  let num2 = 4;
  console.log(sum(num1,num2));
  console.log(sub(num1,num2));
  console.log(mul(num1,num2));
  console.log(div(num1,num2));
  console.log(sum(30,40));
  console.log(sum(12,38));
  function sum(x,y)
  {
  return x+y;
  }
  function sub(x,y)
  {
  return x-y;
  }
  function mul(x,y)
  {
  return x\*y;
  }
  function div(x,y)
  {
  return x/y;
  }

## How to define a function in JS

syntax :

function <function_name>(parameters)
{
// logic
[return <value>]
}

Example :

function sum(num1,num2)
{
return num1+num2;
}

- return statement is optional

## Parts of the function :

- In generally a function consists of three things

  a. Function Declaration (Not Required) / function prototype

  b. Function Call :

         let res = sum(5,6);

         - Arguments : The value we passed to the function call is known as arguments
         - Function call  statement simply calls the function definition just by passing
           arguments to the parameter of the function.

  c. Function Definition

        - In function defintion we actually write the logic of the function .

        - Example:

          function sum(x,y)
          {
              return x+y;
          }

       - Here , x and y is called formal parameter.They suppose to be initialized
         during function call.



       - The number of time we call to the function by passing different arguments
         the formal parameters receive those arguments differently with each function call.

## Categories of Function :

1.  Function without parameter and without return type

    ```
    function printLine(){
        let str='';
        for(let i=0;i<=100;i++)
        {
           str+='#';
        }
        console.log(str);
    }

    printLine();
    ```

2.  Function with parameter and without return type

    ```
    function PrintVal(val){

        console.log("val="+val);
    }

    printVal(5);
    ```

3.  Function without parameter and with return type

    ```
    function PI(){

        return 3.141;
    }
    // find area of circle whose radius r is 5
    let r = 5;
    let area = PI() * r * r;
    console.log(`${PI()}*${r}*${r}=${area}`);
    ```

4.  Function with parameter and with return type

    ```
    function fact(num){
       let f=1;
       while(num!=0)
       {
          f = f * num;
          num--;
       }
       return f;
    }

    let x = fact(5);
    console.log(x);
    ```

## Types of Function

There are two types of function

1.  User Defined Function

2.  Predefined Function

    a. Mathmatical Functions

    b. Date Functions

    c. String Functions

    d. Numeric Functions

    e. Array Functions

# Exercises Using User defined Function :

https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

https://contactmentor.com/js-function-exercises-solution/

# Adavance Concepts On function :

1. Arrow Function

2. Default Arguments

3. In JS function are kind of object with type function

4. Function Properties :
   arguments
   Length
   Prototype
5. Function Methods :
   call()
   apply()
   bind()

6. Anonymous Function

7. Callback Function

8. Closure in JS

## Predefined Functions :

# 1. Mathematical Functions :

- These functions are responsible for mathematical operations.

- These functions are present under an Object known as Math Object.

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

- Math object having Properties and Methods

  Properties :

  ***

  Math.E
  Euler's number and the base of natural logarithms; approximately 2.718.

Math.LN10
Natural logarithm of 10; approximately 2.303.

Math.LN2
Natural logarithm of 2; approximately 0.693.

Math.LOG10E
Base-10 logarithm of E; approximately 0.434.

Math.LOG2E
Base-2 logarithm of E; approximately 1.443.

Math.PI
Ratio of a circle's circumference to its diameter; approximately 3.14159.

Math.SQRT1_2
Square root of ½; approximately 0.707.

Math.SQRT2
Square root of 2; approximately 1.414.

Methods :

---

1.  Math.abs()
2.  Math.floor()
3.  Math.max()
4.  Math.min()
5.  Math.pow()
6.  Math.random()
7.  Math.round()
8.  Math.sign()
9.  Math.sqrt()
10. Math.trunc()
11. Math.ceil()

# 2. String Handling Functions :

## String In Javascript :

let name = "Alok Kumar"

console.log(typeof name);

### String Function Lists :

---

| SLNO | FUNCTION NAME | PURPOSE |

---

                   anchor()

                   at()

                   big()

                   blink()

                   bold()

                   charAt()

                   charCodeAt()

                   codePointAt()

                   concat()

                   String()


                   endsWith()

                   fixed()

                   fontcolor()

                   fontsize()

                   includes()

                   indexOf()

                   isWellFormed()

                   italics()

                   lastIndexOf()

                   link()


                   localeCompare()

match
:
ƒ match()
matchAll
:
ƒ matchAll()
normalize
:
ƒ normalize()
padEnd
:
ƒ padEnd()
padStart
:
ƒ padStart()
repeat
:
ƒ repeat()
replace
:
ƒ replace()
replaceAll
:
ƒ replaceAll()
search
:
ƒ search()
slice
:
ƒ slice()
small
:
ƒ small()
split
:
ƒ split()
startsWith
:
ƒ startsWith()
strike
:
ƒ strike()
sub
:
ƒ sub()
substr
:
ƒ substr()
substring
:
ƒ substring()
sup
:
ƒ sup()
toLocaleLowerCase
:
ƒ toLocaleLowerCase()
toLocaleUpperCase
:
ƒ toLocaleUpperCase()
toLowerCase
:
ƒ toLowerCase()
toString
:
ƒ toString()
toUpperCase
:
ƒ toUpperCase()
toWellFormed
:
ƒ toWellFormed()
trim
:
ƒ trim()
trimEnd
:
ƒ trimEnd()
trimLeft
:
ƒ trimStart()
trimRight
:
ƒ trimEnd()
trimStart
:
ƒ trimStart()
valueOf
:
ƒ valueOf()
